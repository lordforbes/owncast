package webfinger

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/owncast/owncast/utils"
)

// GetWebfingerLinks will return webfinger data for an account.
func GetWebfingerLinks(account string) ([]map[string]interface{}, error) {
	type webfingerResponse struct {
		Links []map[string]interface{} `json:"links"`
	}

	account = strings.TrimLeft(account, "@") // remove any leading @
	accountComponents := strings.Split(account, "@")
	fediverseServer := accountComponents[1]

	// Reject any requests to our internal network or loopback.
	if utils.IsHostnameInternal(fediverseServer) {
		return nil, errors.New("unable to use provided host as a valid fediverse server")
	}

	// HTTPS is required.
	requestURL, err := url.Parse("https://" + fediverseServer)
	if err != nil {
		return nil, fmt.Errorf("unable to parse fediverse server host %s", fediverseServer)
	}

	requestURL.Path = "/.well-known/webfinger"
	query := requestURL.Query()
	query.Add("resource", fmt.Sprintf("acct:%s", account))
	requestURL.RawQuery = query.Encode()

	// Do not support redirects.
	client := &http.Client{
		CheckRedirect: func(req *http.Request, via []*http.Request) error {
			return http.ErrUseLastResponse
		},
	}

	req, err := http.NewRequest("GET", requestURL.String(), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Accept", "application/json")

	response, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	if response.StatusCode != http.StatusOK {
		return nil, errors.New("webfinger request returned bad status code: " + http.StatusText(response.StatusCode) + ", check account details")
	}

	defer response.Body.Close()

	var links webfingerResponse
	decoder := json.NewDecoder(response.Body)
	if err := decoder.Decode(&links); err != nil {
		return nil, fmt.Errorf("error decoding webfinger response: %s", err)
	}

	return links.Links, nil
}
