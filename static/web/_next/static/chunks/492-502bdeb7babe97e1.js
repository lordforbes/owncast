(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{97937:function(e,t,o){"use strict";o.d(t,{Z:function(){return f}});var n=o(1413),r=o(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},u=o(42135),a=function(e,t){return r.createElement(u.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:l}))};a.displayName="CloseOutlined";var f=r.forwardRef(a)},10227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(92648).Z,r=o(17273).Z,l=n(o(67294)),u=o(41003),a=o(67795),f=o(54465),c=o(72692),i=o(48245),s=o(69246),d=o(10227),p=o(33468);let h=new Set;function v(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let o,n;let{href:a,as:h,children:b,prefetch:g,passHref:m,replace:_,shallow:C,scroll:M,locale:k,onClick:E,onMouseEnter:j,onTouchStart:O,legacyBehavior:L=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,L&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let w=!1!==g,x=l.default.useContext(c.RouterContext),R=l.default.useContext(i.AppRouterContext),I=null!=x?x:R,S=!x,{href:T,as:Z}=l.default.useMemo(()=>{if(!x){let e=y(a);return{href:e,as:h?y(h):e}}let[e,t]=u.resolveHref(x,a,!0);return{href:e,as:h?u.resolveHref(x,h):t||e}},[x,a,h]),N=l.default.useRef(T),D=l.default.useRef(Z);L&&(n=l.default.Children.only(o));let H=L?n&&"object"==typeof n&&n.ref:t,[K,U,A]=s.useIntersection({rootMargin:"200px"}),B=l.default.useCallback(e=>{(D.current!==Z||N.current!==T)&&(A(),D.current=Z,N.current=T),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[Z,H,T,A,K]);l.default.useEffect(()=>{I&&U&&w&&v(I,T,Z,{locale:k})},[Z,T,U,k,w,null==x?void 0:x.locale,I]);let z={ref:B,onClick(e){L||"function"!=typeof E||E(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,o,n,r,a,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(h):h()}(e,I,T,Z,_,C,M,k,S,w)},onMouseEnter(e){L||"function"!=typeof j||j(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(w||!S)&&v(I,T,Z,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){L||"function"!=typeof O||O(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(w||!S)&&v(I,T,Z,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!L||m||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&d.getDomainLocale(Z,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);z.href=t||p.addBasePath(f.addLocale(Z,e,null==x?void 0:x.defaultLocale))}return L?l.default.cloneElement(n,z):l.default.createElement("a",Object.assign({},P,z),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:f}=e,c=f||!l,[i,s]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!i){let e=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(e)}},[c,o,t,i,d.current]);let h=n.useCallback(()=>{s(!1)},[]);return[p,i,h]};var n=o(67294),r=o(44686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,o){e.exports=o(31551)}}]);