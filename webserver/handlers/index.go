package handlers

import (
	"bytes"
	"crypto/md5" // nolint:gosec
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"path/filepath"
	"strings"
	"time"

	"github.com/owncast/owncast/config"
	"github.com/owncast/owncast/core"
	"github.com/owncast/owncast/core/cache"
	"github.com/owncast/owncast/models"
	"github.com/owncast/owncast/persistence/configrepository"
	"github.com/owncast/owncast/static"
	"github.com/owncast/owncast/utils"
	"github.com/owncast/owncast/webserver/router/middleware"
	log "github.com/sirupsen/logrus"
)

var gc = cache.GetGlobalCache()

// IndexHandler handles the default index route.
func IndexHandler(w http.ResponseWriter, r *http.Request) {
	middleware.EnableCors(w)

	isIndexRequest := r.URL.Path == "/" || filepath.Base(r.URL.Path) == "index.html" || filepath.Base(r.URL.Path) == ""

	if utils.IsUserAgentAPlayer(r.UserAgent()) && isIndexRequest {
		http.Redirect(w, r, "/hls/stream.m3u8", http.StatusTemporaryRedirect)
		return
	}

	// For search engine bots and social scrapers return a special
	// server-rendered page.
	if utils.IsUserAgentABot(r.UserAgent()) && isIndexRequest {
		handleScraperMetadataPage(w, r)
		return
	}

	// Set a cache control max-age header
	middleware.SetCachingHeaders(w, r)

	nonceRandom, _ := utils.GenerateRandomString(5)

	// Set our global HTTP headers
	middleware.SetHeaders(w, fmt.Sprintf("nonce-%s", nonceRandom))

	if isIndexRequest {
		renderIndexHtml(w, nonceRandom)
		return
	}

	serveWeb(w, r)
}

func renderIndexHtml(w http.ResponseWriter, nonce string) {
	type serverSideContent struct {
		Name             string
		Summary          string
		RequestedURL     string
		TagsString       string
		ThumbnailURL     string
		Thumbnail        string
		Image            string
		StatusJSON       string
		ServerConfigJSON string
		EmbedVideo       string
		Nonce            string
	}

	status := getStatusResponse()
	sb, err := json.Marshal(status)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	config := getConfigResponse()
	cb, err := json.Marshal(config)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	configRepository := configrepository.Get()
	content := serverSideContent{
		Name:             configRepository.GetServerName(),
		Summary:          configRepository.GetServerSummary(),
		RequestedURL:     fmt.Sprintf("%s%s", configRepository.GetServerURL(), "/"),
		TagsString:       strings.Join(configRepository.GetServerMetadataTags(), ","),
		ThumbnailURL:     "thumbnail.jpg",
		Thumbnail:        "thumbnail.jpg",
		Image:            "logo/external",
		StatusJSON:       string(sb),
		ServerConfigJSON: string(cb),
		EmbedVideo:       "embed/video",
		Nonce:            nonce,
	}

	index, err := static.GetWebIndexTemplate()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Use a buffer to ensure that we do not write a partial response header before checking for errors
	var buf bytes.Buffer
	if err := index.Execute(&buf, content); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(buf.Bytes())
}

// MetadataPage represents a server-rendered web page for bots and web scrapers.
type MetadataPage struct {
	RequestedURL  string
	Image         string
	Thumbnail     string
	TagsString    string
	Summary       string
	Name          string
	Tags          []string
	SocialHandles []models.SocialHandle
}

// Return a basic HTML page with server-rendered metadata from the config
// to give to Opengraph clients and web scrapers (bots, web crawlers, etc).
func handleScraperMetadataPage(w http.ResponseWriter, r *http.Request) {
	cacheKey := "bot-scraper-html"
	cacheHtmlExpiration := time.Duration(60) * time.Second
	c := gc.GetOrCreateCache(cacheKey, cacheHtmlExpiration)

	cachedHtml := c.GetValueForKey(cacheKey)
	if cachedHtml != nil {
		w.Header().Set("Content-Type", "text/html")
		_, _ = w.Write(cachedHtml)
		return
	}

	tmpl, err := static.GetBotMetadataTemplate()
	if err != nil {
		log.Errorln(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	scheme := "http"
	configRepository := configrepository.Get()
	if siteURL := configRepository.GetServerURL(); siteURL != "" {
		if parsed, err := url.Parse(siteURL); err == nil && parsed.Scheme != "" {
			scheme = parsed.Scheme
		}
	}

	fullURL, err := url.Parse(fmt.Sprintf("%s://%s%s", scheme, r.Host, r.URL.Path))
	if err != nil {
		log.Errorln(err)
	}
	imageURL, err := url.Parse(fmt.Sprintf("%s://%s%s", scheme, r.Host, "/logo/external"))
	if err != nil {
		log.Errorln(err)
	}

	status := core.GetStatus()

	// If the thumbnail does not exist or we're offline then just use the logo image
	var thumbnailURL string
	if status.Online && utils.DoesFileExists(filepath.Join(config.DataDirectory, "tmp", "thumbnail.jpg")) {
		thumbnail, err := url.Parse(fmt.Sprintf("%s://%s%s", scheme, r.Host, "/thumbnail.jpg"))
		if err != nil {
			log.Errorln(err)
			thumbnailURL = imageURL.String()
		} else {
			thumbnailURL = thumbnail.String()
		}
	} else {
		thumbnailURL = imageURL.String()
	}

	tagsString := strings.Join(configRepository.GetServerMetadataTags(), ",")
	metadata := MetadataPage{
		Name:          configRepository.GetServerName(),
		RequestedURL:  fullURL.String(),
		Image:         imageURL.String(),
		Summary:       configRepository.GetServerSummary(),
		Thumbnail:     thumbnailURL,
		TagsString:    tagsString,
		Tags:          configRepository.GetServerMetadataTags(),
		SocialHandles: configRepository.GetSocialHandles(),
	}

	// Cache the rendered HTML
	var b bytes.Buffer
	if err := tmpl.Execute(&b, metadata); err != nil {
		log.Errorln(err)
	}
	c.Set(cacheKey, b.Bytes())

	// Set a cache header
	middleware.SetCachingHeaders(w, r)
	w.Header().Set("ETag", fmt.Sprintf("%x", md5.Sum(b.Bytes()))) // nolint:gosec
	w.Header().Set("Content-Type", "text/html")
	if _, err = w.Write(b.Bytes()); err != nil {
		log.Errorln(err)
	}
}
