(()=>{var e={74:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(307);const i=(0,s.forwardRef)((function({icon:e,size:t=24,...n},i){return(0,s.cloneElement)(e,{width:t,height:t,...n,ref:i})}))},381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(196),i=n(444);const o=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(i.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},951:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let s=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(s++,"%c"===e&&(i=s))})),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(741)(t);const{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},741:(e,t,n)=>{e.exports=function(e){function t(e){let n,i,o,r=null;function c(...e){if(!c.enabled)return;const s=c,i=Number(new Date),o=i-(n||i);s.diff=o,s.prev=n,s.curr=i,n=i,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let r=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,i)=>{if("%%"===n)return"%";r++;const o=t.formatters[i];if("function"==typeof o){const t=e[r];n=o.call(s,t),e.splice(r,1),r--}return n})),t.formatArgs.call(s,e);(s.log||t.log).apply(s,e)}return c.namespace=e,c.useColors=t.useColors(),c.color=t.selectColor(e),c.extend=s,c.destroy=t.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==r?r:(i!==t.namespaces&&(i=t.namespaces,o=t.enabled(e)),o),set:e=>{r=e}}),"function"==typeof t.init&&t.init(c),c}function s(e,n){const s=t(this.namespace+(void 0===n?":":n)+e);return s.log=this.log,s}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(i),...t.skips.map(i).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const s=("string"==typeof e?e:"").split(/[\s,]+/),i=s.length;for(n=0;n<i;n++)s[n]&&("-"===(e=s[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,s;for(n=0,s=t.skips.length;n<s;n++)if(t.skips[n].test(e))return!1;for(n=0,s=t.names.length;n<s;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(171),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},171:e=>{var t=1e3,n=60*t,s=60*n,i=24*s,o=7*i,r=365.25*i;function c(e,t,n,s){var i=t>=1.5*n;return Math.round(e/n)+" "+s+(i?"s":"")}e.exports=function(e,a){a=a||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!c)return;var a=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*r;case"weeks":case"week":case"w":return a*o;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*s;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&isFinite(e))return a.long?function(e){var o=Math.abs(e);if(o>=i)return c(e,o,i,"day");if(o>=s)return c(e,o,s,"hour");if(o>=n)return c(e,o,n,"minute");if(o>=t)return c(e,o,t,"second");return e+" ms"}(e):function(e){var o=Math.abs(e);if(o>=i)return Math.round(e/i)+"d";if(o>=s)return Math.round(e/s)+"h";if(o>=n)return Math.round(e/n)+"m";if(o>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},975:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(951);const i=n.n(s)()("dops:analytics");let o,r;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;const c={initialize:function(e,t,n){c.setUser(e,t),c.setSuperProps(n),c.identifyUser()},setGoogleAnalyticsEnabled:function(e,t=null){this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=t},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,t){r={ID:e,username:t}},setSuperProps:function(e){o=e},assignSuperProps:function(e){o=Object.assign(o||{},e)},mc:{bumpStat:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);i("Bumping stats %o",e)}else n="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(t),i('Bumping stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+n+"&t="+Math.random())},bumpStatWithPageView:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);i("Built stats %o",e)}else n="&"+encodeURIComponent(e)+"="+encodeURIComponent(t),i('Built stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+n+"&t="+Math.random())}},pageView:{record:function(e,t){c.tracks.recordPageView(e),c.ga.recordPageView(e,t)}},purchase:{record:function(e,t,n,s,i,o,r){c.ga.recordPurchase(e,t,n,s,i,o,r)}},tracks:{recordEvent:function(e,t){t=t||{},0===e.indexOf("akismet_")||0===e.indexOf("jetpack_")?(o&&(i("- Super Props: %o",o),t=Object.assign(t,o)),i('Record event "%s" called with props %s',e,JSON.stringify(t)),window._tkq.push(["recordEvent",e,t])):i('- Event name must be prefixed by "akismet_" or "jetpack_"')},recordJetpackClick:function(e){const t="object"==typeof e?e:{target:e};c.tracks.recordEvent("jetpack_wpa_click",t)},recordPageView:function(e){c.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){i("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};c.ga.initialized||(r&&(e={userId:"u-"+r.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),c.ga.initialized=!0)},recordPageView:function(e,t){c.ga.initialize(),i("Recording Page View ~ [URL: "+e+"] [Title: "+t+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:t}))},recordEvent:function(e,t,n,s){c.ga.initialize();let o="Recording Event ~ [Category: "+e+"] [Action: "+t+"]";void 0!==n&&(o+=" [Option Label: "+n+"]"),void 0!==s&&(o+=" [Option Value: "+s+"]"),i(o),this.googleAnalyticsEnabled&&window.ga("send","event",e,t,n,s)},recordPurchase:function(e,t,n,s,i,o,r){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:s,currency:r}),window.ga("ecommerce:addItem",{id:e,name:t,sku:n,price:i,quantity:o}),window.ga("ecommerce:send")}},identifyUser:function(){r&&window._tkq.push(["identifyUser",r.ID,r.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},a=c},743:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l});var s=n(132),i=n(483);function o(e){class t extends Error{constructor(...t){super(...t),this.name=e}}return t}const r=o("JsonParseError"),c=o("JsonParseAfterRedirectError"),a=o("Api404Error"),u=o("Api404AfterRedirectError"),d=o("FetchNetworkError");const l=new function(e,t){let n=e,o=e,r={"X-WP-Nonce":t},c={credentials:"same-origin",headers:r},a={method:"post",credentials:"same-origin",headers:Object.assign({},r,{"Content-type":"application/json"})},u=function(e){const t=e.split("?"),n=t.length>1?t[1]:"",s=n.length?n.split("&"):[];return s.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+s.join("&")};const d={setApiRoot(e){n=e},setWpcomOriginApiUrl(e){o=e},setApiNonce(e){r={"X-WP-Nonce":e},c={credentials:"same-origin",headers:r},a={method:"post",credentials:"same-origin",headers:Object.assign({},r,{"Content-type":"application/json"})}},setCacheBusterCallback:e=>{u=e},registerSite:(e,t)=>{const i={registration_nonce:e,no_iframe:!0};return(0,s.jetpackConfigHas)("consumer_slug")&&(i.plugin_slug=(0,s.jetpackConfigGet)("consumer_slug")),null!==t&&(i.redirect_uri=t),h(`${n}jetpack/v4/connection/register`,a,{body:JSON.stringify(i)}).then(p).then(g)},fetchAuthorizationUrl:e=>l((0,i.addQueryArgs)(`${n}jetpack/v4/connection/authorize_url`,{no_iframe:"1",redirect_uri:e}),c).then(p).then(g),fetchSiteConnectionData:()=>l(`${n}jetpack/v4/connection/data`,c).then(g),fetchSiteConnectionStatus:()=>l(`${n}jetpack/v4/connection`,c).then(g),fetchSiteConnectionTest:()=>l(`${n}jetpack/v4/connection/test`,c).then(p).then(g),fetchUserConnectionData:()=>l(`${n}jetpack/v4/connection/data`,c).then(g),fetchUserTrackingSettings:()=>l(`${n}jetpack/v4/tracking/settings`,c).then(p).then(g),updateUserTrackingSettings:e=>h(`${n}jetpack/v4/tracking/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),disconnectSite:()=>h(`${n}jetpack/v4/connection`,a,{body:JSON.stringify({isActive:!1})}).then(p).then(g),fetchConnectUrl:()=>l(`${n}jetpack/v4/connection/url`,c).then(p).then(g),unlinkUser:()=>h(`${n}jetpack/v4/connection/user`,a,{body:JSON.stringify({linked:!1})}).then(p).then(g),reconnect:()=>h(`${n}jetpack/v4/connection/reconnect`,a).then(p).then(g),fetchConnectedPlugins:()=>l(`${n}jetpack/v4/connection/plugins`,c).then(p).then(g),setHasSeenWCConnectionModal:()=>h(`${n}jetpack/v4/seen-wc-connection-modal`,a).then(p).then(g),fetchModules:()=>l(`${n}jetpack/v4/module/all`,c).then(p).then(g),fetchModule:e=>l(`${n}jetpack/v4/module/${e}`,c).then(p).then(g),activateModule:e=>h(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!0})}).then(p).then(g),deactivateModule:e=>h(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!1})}),updateModuleOptions:(e,t)=>h(`${n}jetpack/v4/module/${e}`,a,{body:JSON.stringify(t)}).then(p).then(g),updateSettings:e=>h(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),getProtectCount:()=>l(`${n}jetpack/v4/module/protect/data`,c).then(p).then(g),resetOptions:e=>h(`${n}jetpack/v4/options/${e}`,a,{body:JSON.stringify({reset:!0})}).then(p).then(g),activateVaultPress:()=>h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"vaultpress",status:"active"})}).then(p).then(g),getVaultPressData:()=>l(`${n}jetpack/v4/module/vaultpress/data`,c).then(p).then(g),installPlugin:(e,t)=>{const s={slug:e,status:"active"};return t&&(s.source=t),h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify(s)}).then(p).then(g)},activateAkismet:()=>h(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"akismet",status:"active"})}).then(p).then(g),getAkismetData:()=>l(`${n}jetpack/v4/module/akismet/data`,c).then(p).then(g),checkAkismetKey:()=>l(`${n}jetpack/v4/module/akismet/key/check`,c).then(p).then(g),checkAkismetKeyTyped:e=>h(`${n}jetpack/v4/module/akismet/key/check`,a,{body:JSON.stringify({api_key:e})}).then(p).then(g),fetchStatsData:e=>l(function(e){let t=`${n}jetpack/v4/module/stats/data`;-1!==t.indexOf("?")?t+=`&range=${encodeURIComponent(e)}`:t+=`?range=${encodeURIComponent(e)}`;return t}(e),c).then(p).then(g).then(m),getPluginUpdates:()=>l(`${n}jetpack/v4/updates/plugins`,c).then(p).then(g),getPlans:()=>l(`${n}jetpack/v4/plans`,c).then(p).then(g),fetchSettings:()=>l(`${n}jetpack/v4/settings`,c).then(p).then(g),updateSetting:e=>h(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchSiteData:()=>l(`${n}jetpack/v4/site`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteFeatures:()=>l(`${n}jetpack/v4/site/features`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteProducts:()=>l(`${n}jetpack/v4/site/products`,c).then(p).then(g),fetchSitePurchases:()=>l(`${n}jetpack/v4/site/purchases`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteBenefits:()=>l(`${n}jetpack/v4/site/benefits`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchSiteDiscount:()=>l(`${n}jetpack/v4/site/discount`,c).then(p).then(g).then((e=>e.data)),fetchSetupQuestionnaire:()=>l(`${n}jetpack/v4/setup/questionnaire`,c).then(p).then(g),fetchRecommendationsData:()=>l(`${n}jetpack/v4/recommendations/data`,c).then(p).then(g),fetchRecommendationsProductSuggestions:()=>l(`${n}jetpack/v4/recommendations/product-suggestions`,c).then(p).then(g),fetchRecommendationsUpsell:()=>l(`${n}jetpack/v4/recommendations/upsell`,c).then(p).then(g),fetchRecommendationsConditional:()=>l(`${n}jetpack/v4/recommendations/conditional`,c).then(p).then(g),saveRecommendationsData:e=>h(`${n}jetpack/v4/recommendations/data`,a,{body:JSON.stringify({data:e})}).then(p),fetchProducts:()=>l(`${n}jetpack/v4/products`,c).then(p).then(g),fetchRewindStatus:()=>l(`${n}jetpack/v4/rewind`,c).then(p).then(g).then((e=>JSON.parse(e.data))),fetchScanStatus:()=>l(`${n}jetpack/v4/scan`,c).then(p).then(g).then((e=>JSON.parse(e.data))),dismissJetpackNotice:e=>h(`${n}jetpack/v4/notice/${e}`,a,{body:JSON.stringify({dismissed:!0})}).then(p).then(g),fetchPluginsData:()=>l(`${n}jetpack/v4/plugins`,c).then(p).then(g),fetchIntroOffers:()=>l(`${n}jetpack/v4/intro-offers`,c).then(p).then(g),fetchVerifySiteGoogleStatus:e=>l(null!==e?`${n}jetpack/v4/verify-site/google/${e}`:`${n}jetpack/v4/verify-site/google`,c).then(p).then(g),verifySiteGoogle:e=>h(`${n}jetpack/v4/verify-site/google`,a,{body:JSON.stringify({keyring_id:e})}).then(p).then(g),submitSurvey:e=>h(`${n}jetpack/v4/marketing/survey`,a,{body:JSON.stringify(e)}).then(p).then(g),saveSetupQuestionnaire:e=>h(`${n}jetpack/v4/setup/questionnaire`,a,{body:JSON.stringify(e)}).then(p).then(g),updateLicensingError:e=>h(`${n}jetpack/v4/licensing/error`,a,{body:JSON.stringify(e)}).then(p).then(g),updateLicenseKey:e=>h(`${n}jetpack/v4/licensing/set-license`,a,{body:JSON.stringify({license:e})}).then(p).then(g),getUserLicensesCounts:()=>l(`${n}jetpack/v4/licensing/user/counts`,c).then(p).then(g),getUserLicenses:()=>l(`${n}jetpack/v4/licensing/user/licenses`,c).then(p).then(g),updateLicensingActivationNoticeDismiss:e=>h(`${n}jetpack/v4/licensing/user/activation-notice-dismiss`,a,{body:JSON.stringify({last_detached_count:e})}).then(p).then(g),updateRecommendationsStep:e=>h(`${n}jetpack/v4/recommendations/step`,a,{body:JSON.stringify({step:e})}).then(p),confirmIDCSafeMode:()=>h(`${n}jetpack/v4/identity-crisis/confirm-safe-mode`,a).then(p),startIDCFresh:e=>h(`${n}jetpack/v4/identity-crisis/start-fresh`,a,{body:JSON.stringify({redirect_uri:e})}).then(p).then(g),migrateIDC:()=>h(`${n}jetpack/v4/identity-crisis/migrate`,a).then(p),attachLicenses:e=>h(`${n}jetpack/v4/licensing/attach-licenses`,a,{body:JSON.stringify({licenses:e})}).then(p).then(g),fetchSearchPlanInfo:()=>l(`${o}jetpack/v4/search/plan`,c).then(p).then(g),fetchSearchSettings:()=>l(`${o}jetpack/v4/search/settings`,c).then(p).then(g),updateSearchSettings:e=>h(`${o}jetpack/v4/search/settings`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchSearchStats:()=>l(`${o}jetpack/v4/search/stats`,c).then(p).then(g),fetchWafSettings:()=>l(`${n}jetpack/v4/waf`,c).then(p).then(g),updateWafSettings:e=>h(`${n}jetpack/v4/waf`,a,{body:JSON.stringify(e)}).then(p).then(g),fetchWordAdsSettings:()=>l(`${n}jetpack/v4/wordads/settings`,c).then(p).then(g),updateWordAdsSettings:e=>h(`${n}jetpack/v4/wordads/settings`,a,{body:JSON.stringify(e)}),fetchSearchPricing:()=>l(`${o}jetpack/v4/search/pricing`,c).then(p).then(g),fetchMigrationStatus:()=>l(`${n}jetpack/v4/migration/status`,c).then(p).then(g),fetchBackupUndoEvent:()=>l(`${n}jetpack/v4/site/backup/undo-event`,c).then(p).then(g)};function l(e,t){return fetch(u(e),t)}function h(e,t,n){return fetch(e,Object.assign({},t,n)).catch(f)}function m(e){return e.general&&void 0===e.general.response||e.week&&void 0===e.week.response||e.month&&void 0===e.month.response?e:{}}Object.assign(this,d)};function p(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((()=>{throw e.redirected?new u(e.redirected):new a})):e.json().catch((e=>h(e))).then((t=>{const n=new Error(`${t.message} (Status ${e.status})`);throw n.response=t,n.name="ApiError",n}))}function g(e){return e.json().catch((t=>h(t,e.redirected,e.url)))}function h(e,t,n){throw t?new c(n):new r}function f(){throw new d}},895:(e,t,n)=>{"use strict";function s(e,t={}){const n={};let s;if("undefined"!=typeof window&&(s=window?.JP_CONNECTION_INITIAL_STATE?.calypsoEnv),0===e.search("https://")){const t=new URL(e);e=`https://${t.host}${t.pathname}`,n.url=encodeURIComponent(e)}else n.source=encodeURIComponent(e);for(const e in t)n[e]=encodeURIComponent(t[e]);!Object.keys(n).includes("site")&&"undefined"!=typeof jetpack_redirects&&jetpack_redirects.hasOwnProperty("currentSiteRawUrl")&&(n.site=jetpack_redirects.currentBlogID??jetpack_redirects.currentSiteRawUrl),s&&(n.calypso_env=s);return"https://jetpack.com/redirect/?"+Object.keys(n).map((e=>e+"="+n[e])).join("&")}n.d(t,{Z:()=>s})},132:(e,t,n)=>{let s={};try{s=n(647)}catch{console.error("jetpackConfig is missing in your webpack config file. See @automattic/jetpack-config"),s={missingConfig:!0}}const i=e=>s.hasOwnProperty(e);e.exports={jetpackConfigHas:i,jetpackConfigGet:e=>{if(!i(e))throw'This app requires the "'+e+'" Jetpack Config to be defined in your webpack configuration file. See details in @automattic/jetpack-config package docs.';return s[e]}}},294:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(743),i=n(818),o=n(196),r=n(428);const c=window?.JP_CONNECTION_INITIAL_STATE?window.JP_CONNECTION_INITIAL_STATE:{},a=({registrationNonce:e=c.registrationNonce,apiRoot:t=c.apiRoot,apiNonce:n=c.apiNonce,redirectUri:a,autoTrigger:u,from:d,skipUserConnection:l}={})=>{const{registerSite:p,connectUser:g,refreshConnectedPlugins:h}=(0,i.useDispatch)(r.t),f=(0,i.useSelect)((e=>e(r.t).getRegistrationError())),{siteIsRegistering:m,userIsConnecting:C,userConnectionData:y,connectedPlugins:w,connectionErrors:v,isRegistered:k,isUserConnected:S,hasConnectedOwner:E,isOfflineMode:b}=(0,i.useSelect)((e=>({siteIsRegistering:e(r.t).getSiteIsRegistering(),userIsConnecting:e(r.t).getUserIsConnecting(),userConnectionData:e(r.t).getUserConnectionData(),connectedPlugins:e(r.t).getConnectedPlugins(),connectionErrors:e(r.t).getConnectionErrors(),isOfflineMode:e(r.t).getIsOfflineMode(),...e(r.t).getConnectionStatus()}))),_=()=>l?a?(window.location=a,Promise.resolve(a)):Promise.resolve():g({from:d,redirectUri:a}),j=t=>(t&&t.preventDefault(),k?_():p({registrationNonce:e,redirectUri:a}).then((()=>_())));return(0,o.useEffect)((()=>{s.ZP.setApiRoot(t),s.ZP.setApiNonce(n)}),[t,n]),(0,o.useEffect)((()=>{!u||m||C||j()}),[]),{handleRegisterSite:j,handleConnectUser:_,refreshConnectedPlugins:h,isRegistered:k,isUserConnected:S,siteIsRegistering:m,userIsConnecting:C,registrationError:f,userConnectionData:y,hasConnectedOwner:E,connectedPlugins:w,connectionErrors:v,isOfflineMode:b}}},523:(e,t,n)=>{"use strict";n.d(t,{LI:()=>o,N4:()=>c,Qo:()=>l,T1:()=>u,TS:()=>d,ZP:()=>S,b5:()=>g,i6:()=>i,qJ:()=>h,qV:()=>a,r7:()=>r,wQ:()=>p});var s=n(743);const i="SET_CONNECTION_STATUS",o="SET_CONNECTION_STATUS_IS_FETCHING",r="SET_SITE_IS_REGISTERING",c="SET_USER_IS_CONNECTING",a="SET_REGISTRATION_ERROR",u="CLEAR_REGISTRATION_ERROR",d="SET_AUTHORIZATION_URL",l="DISCONNECT_USER_SUCCESS",p="SET_CONNECTED_PLUGINS",g="SET_CONNECTION_ERRORS",h="SET_IS_OFFLINE_MODE",f=e=>({type:i,connectionStatus:e}),m=e=>({type:r,isRegistering:e}),C=e=>({type:c,isConnecting:e}),y=e=>({type:a,registrationError:e}),w=()=>({type:u}),v=e=>({type:d,authorizationUrl:e}),k=e=>({type:p,connectedPlugins:e});const S={setConnectionStatus:f,setConnectionStatusIsFetching:e=>({type:o,isFetching:e}),fetchConnectionStatus:()=>({type:"FETCH_CONNECTION_STATUS"}),fetchAuthorizationUrl:e=>({type:"FETCH_AUTHORIZATION_URL",redirectUri:e}),setSiteIsRegistering:m,setUserIsConnecting:C,setRegistrationError:y,clearRegistrationError:w,setAuthorizationUrl:v,registerSite:function*({registrationNonce:e,redirectUri:t}){yield w(),yield m(!0);try{const n=yield{type:"REGISTER_SITE",registrationNonce:e,redirectUri:t};return yield f({isRegistered:!0}),yield v(n.authorizeUrl),yield m(!1),Promise.resolve(n)}catch(e){return yield y(e),yield m(!1),Promise.reject(e)}},connectUser:function*({from:e,redirectFunc:t,redirectUri:n}={}){yield C(!0),yield{type:"CONNECT_USER",from:e,redirectFunc:t,redirectUri:n}},disconnectUserSuccess:()=>({type:l}),setConnectedPlugins:k,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise((t=>s.ZP.fetchConnectedPlugins().then((n=>{e(k(n)),t(n)})))),setConnectionErrors:e=>({type:g,connectionErrors:e}),setIsOfflineMode:e=>({type:h,isOfflineMode:e})}},432:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(743),i=n(818),o=n(57);const r={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>s.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:({registrationNonce:e,redirectUri:t})=>s.ZP.registerSite(e,t),CONNECT_USER:(0,i.createRegistryControl)((({resolveSelect:e})=>({from:t,redirectFunc:n,redirectUri:s}={})=>new Promise(((i,r)=>{e(o.Z).getAuthorizationUrl(s).then((e=>{const s=n||(e=>window.location.assign(e)),o=new URL(e);t&&o.searchParams.set("from",encodeURIComponent(t));const r=o.toString();s(r),i(r)})).catch((e=>{r(e)}))}))))}},479:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(818),i=n(523);const o=(0,s.combineReducers)({connectionStatus:(e={},t)=>{switch(t.type){case i.i6:return{...e,...t.connectionStatus};case i.Qo:return{...e,isUserConnected:!1}}return e},connectionStatusIsFetching:(e=!1,t)=>t.type===i.LI?t.isFetching:e,siteIsRegistering:(e=!1,t)=>t.type===i.r7?t.isRegistering:e,userIsConnecting:(e=!1,t)=>t.type===i.N4?t.isConnecting:e,registrationError:(e,t)=>{switch(t.type){case i.T1:return!1;case i.qV:return t.registrationError;default:return e}},authorizationUrl:(e,t)=>t.type===i.TS?t.authorizationUrl:e,userConnectionData:(e,t)=>(t.type,e),connectedPlugins:(e={},t)=>t.type===i.wQ?t.connectedPlugins:e,connectionErrors:(e={},t)=>t.type===i.b5?t.connectionErrors:e,isOfflineMode:(e=!1,t)=>t.type===i.qJ?t.isConnecting:e})},728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(818),i=n(523),o=n(57);const r={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const n=Boolean(e.authorizationUrl),i=(0,s.select)(o.Z).hasFinishedResolution("getAuthorizationUrl",t);return n&&!i&&(0,s.dispatch)(o.Z).finishResolution("getAuthorizationUrl",t),n},*fulfill(e){const t=yield i.ZP.fetchAuthorizationUrl(e);yield i.ZP.setAuthorizationUrl(t.authorizeUrl)}}}}},725:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>e?.userConnectionData?.currentUser?.wpcomUser,getBlogId:e=>e?.userConnectionData?.currentUser?.blogId}}},535:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(818);class i{static store=null;static mayBeInit(e,t){null===i.store&&(i.store=(0,s.createReduxStore)(e,t),(0,s.register)(i.store))}}const o=i},57:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s="jetpack-connection"},428:(e,t,n)=>{"use strict";n.d(t,{t:()=>u.Z});var s=n(523),i=n(432),o=n(479),r=n(728),c=n(725),a=n(535),u=n(57);const d=window.JP_CONNECTION_INITIAL_STATE;d||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),a.Z.mayBeInit(u.Z,{__experimentalUseThunks:!0,reducer:o.Z,actions:s.ZP,selectors:c.Z,resolvers:r.Z,controls:i.Z,initialState:d||{}})},419:(e,t,n)=>{"use strict";n.d(t,{z$:()=>s.Z});n(714),n(354),n(404);var s=n(53);n(380),n(342),n(959),n(58)},342:(e,t,n)=>{"use strict";n(196)},959:(e,t,n)=>{"use strict";n(307)},53:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(975),i=n(294),o=n(307);const{tracks:r}=s.Z,{recordEvent:c}=r,a=({pageViewEventName:e=null,pageViewNamespace:t="jetpack",pageViewSuffix:n="page_view",pageViewEventProperties:a={}}={})=>{const[u,d]=(0,o.useState)(!1),{isUserConnected:l,isRegistered:p,userConnectionData:g={}}=(0,i.Z)(),{wpcomUser:{login:h,ID:f}={},blogId:m}=g.currentUser||{},C=(0,o.useCallback)((async(e,t={})=>{l&&f&&h&&c(e,t)}),[l,f,h]);return(0,o.useEffect)((()=>{l&&f&&h&&m&&s.Z.initialize(f,h,{blog_id:m})}),[m,f,h,l]),(0,o.useEffect)((()=>{const s=e?`${t}_${e}_${n}`:null;p&&s&&(u||(C(s,a),d(!0)))}),[u,t,e,n,p,a,C]),{recordEvent:C,tracks:r}}},380:(e,t,n)=>{"use strict";n(818),n(307),n(58)},166:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>p,rW:()=>l});var s=n(818),i=n(505),o=n(162),r=n(58);const c="SET_JETPACK_MODULES",a="SET_MODULE_UPDATING";function u(e){return l({isLoading:e})}function d(e,t){return{type:a,name:e,isUpdating:t}}function l(e){return{type:c,options:e}}const p={updateJetpackModuleStatus:function*(e){try{yield d(e.name,!0),yield(0,o.zL)(e);const t=yield(0,o.Bs)();return yield l({data:t}),!0}catch(e){const t=(0,s.select)(r.p).getJetpackModules();return yield l(t),!1}finally{yield d(e.name,!1)}},setJetpackModules:l,fetchModules:function*(){if((0,i.Wp)())return!0;try{yield u(!0);const e=yield(0,o.Bs)();return yield l({data:e}),!0}catch(e){const t=(0,s.select)(r.p).getJetpackModules();return yield l(t),!1}finally{yield u(!1)}}}},162:(e,t,n)=>{"use strict";n.d(t,{Bs:()=>c,ZP:()=>u,zL:()=>a});var s=n(989),i=n.n(s);const o="FETCH_JETPACK_MODULES",r="UPDATE_JETPACK_MODULE_STATUS",c=()=>({type:o}),a=e=>({type:r,settings:e}),u={[o]:function(){return i()({path:"/jetpack/v4/module/all",method:"GET"})},[r]:function({settings:e}){return i()({path:`/jetpack/v4/module/${e.name}/active`,method:"POST",data:{active:e.active}})}}},58:(e,t,n)=>{"use strict";n.d(t,{p:()=>u});var s=n(818),i=n(166),o=n(162),r=n(469),c=n(133),a=n(524);const u="jetpack-modules",d=(0,s.createReduxStore)(u,{reducer:r.Z,actions:i.ZP,controls:o.ZP,resolvers:c.Z,selectors:a.Z});(0,s.register)(d);const l=window?.Initial_State?.getModules||window?.Jetpack_Editor_Initial_State?.modules||null;null!==l&&(0,s.dispatch)(u).setJetpackModules({data:{...l}})},469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const s={isLoading:!1,isUpdating:{},data:{}},i=(e=s,t)=>{switch(t.type){case"SET_JETPACK_MODULES":return{...e,...t.options};case"SET_MODULE_UPDATING":return{...e,isUpdating:{...e.isUpdating,[t.name]:t.isUpdating}}}return e}},133:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(166),i=n(162);const o={getJetpackModules:function*(){try{const e=yield(0,i.Bs)();if(e)return(0,s.rW)({data:e})}catch(e){console.error(e)}}}},524:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(505);const i={getJetpackModules:e=>e.data,isModuleActive:(e,t)=>(0,s.Wp)()||(e?.data?.[t]?.activated??!1),areModulesLoading:e=>e.isLoading??!1,isModuleUpdating:(e,t)=>e?.isUpdating?.[t]??!1}},404:(e,t,n)=>{"use strict";var s=n(736);n(483),n(819);const __=s.__;__("Upgrade your plan to use video covers","jetpack-blaze"),__("Upgrade your plan to upload audio","jetpack-blaze")},714:(e,t,n)=>{"use strict";n(817)},505:(e,t,n)=>{"use strict";function s(){return"object"==typeof window&&"string"==typeof window._currentSiteType?window._currentSiteType:null}function i(){return"simple"===s()}n.d(t,{Wp:()=>i})},354:(e,t,n)=>{"use strict";n(674),n(333)},128:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(609);function i(){return React.createElement(s.SVG,{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement(s.G,{clipPath:"url(#clip0_4728_49296)"},React.createElement("circle",{cx:"12",cy:"12",r:"12",fill:"#D9D9D9"}),React.createElement("circle",{cx:"12",cy:"12",r:"12",fill:"black"}),React.createElement(s.Path,{d:"M14.8665 6.68544C14.7139 6.50468 14.4652 6.43826 14.2436 6.52015C14.0224 6.60204 13.875 6.81412 13.875 7.05149V8.71684C13.875 9.02893 13.6226 9.2829 13.3125 9.2829C13.0024 9.2829 12.75 9.02893 12.75 8.71684V4.72989C12.75 4.56762 12.681 4.41365 12.5602 4.3061C12.4354 4.19515 12.3622 4.13288 12.3622 4.13288C12.1537 3.95627 11.8485 3.95552 11.6389 4.13175C11.4086 4.32572 6 8.9327 6 13.434C6 16.7632 8.69175 19.472 12 19.472C15.3082 19.472 18 16.7632 18 13.434C18 10.9267 16.296 8.38022 14.8665 6.68544ZM12.0728 18.5274C11.508 18.544 10.9699 18.3259 10.5259 17.9742C8.3535 16.2537 10.3856 13.4982 11.4469 12.3106C11.7435 11.9789 12.2584 11.9807 12.555 12.3125C13.2742 13.1178 14.4375 14.6416 14.4375 16.0756C14.4375 17.4059 13.3853 18.4885 12.0728 18.5274Z",fill:"white"})))}},647:e=>{"use strict";if(void 0==={consumer_slug:"jetpack-blaze"}){var t=new Error('Cannot find module \'{"consumer_slug":"jetpack-blaze"}\'');throw t.code="MODULE_NOT_FOUND",t}e.exports={consumer_slug:"jetpack-blaze"}},196:e=>{"use strict";e.exports=window.React},819:e=>{"use strict";e.exports=window.lodash},989:e=>{"use strict";e.exports=window.wp.apiFetch},609:e=>{"use strict";e.exports=window.wp.components},333:e=>{"use strict";e.exports=window.wp.compose},818:e=>{"use strict";e.exports=window.wp.data},67:e=>{"use strict";e.exports=window.wp.editPost},238:e=>{"use strict";e.exports=window.wp.editor},307:e=>{"use strict";e.exports=window.wp.element},736:e=>{"use strict";e.exports=window.wp.i18n},817:e=>{"use strict";e.exports=window.wp.plugins},444:e=>{"use strict";e.exports=window.wp.primitives},483:e=>{"use strict";e.exports=window.wp.url},674:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(895),t=n(419),s=n(609),i=n(333),o=n(818),r=n(67),c=n(238),a=n(307),u=n(736),d=n(74),l=n(381),p=n(817),g=n(128);const __=u.__,_x=u._x,h=()=>{const{adminUrl:n,isDashboardEnabled:p,siteFragment:h}=window?.blazeInitialState||{},{tracks:f}=(0,t.z$)(),m=(0,a.useCallback)((()=>f.recordEvent("jetpack_editor_blaze_publish_click")),[f]),{isPostPublished:C,isPublishingPost:y,postId:w,postType:v,postTypeLabel:k,postVisibility:S}=(0,o.useSelect)((e=>({isPostPublished:e(c.store).isCurrentPostPublished(),isPublishingPost:e(c.store).isPublishingPost(),postId:e(c.store).getCurrentPostId(),postType:e(c.store).getCurrentPostType(),postTypeLabel:
// Translators: default post type label.
e(c.store).getPostTypeLabel()||_x("Post","noun","jetpack-blaze"),postVisibility:e(c.store).getEditedPostVisibility()}))),E=(0,i.usePrevious)(y),b={name:"blaze-panel",title:__("Promote with Blaze","jetpack-blaze"),className:"blaze-panel",icon:React.createElement(g.Z,null),initialOpen:!0},_=()=>!!["page","post","product"].includes(v)&&!(!C||"password"===S||"private"===S);return(0,a.useEffect)((()=>{E&&!y&&_()&&C&&f.recordEvent("jetpack_editor_blaze_post_publish_panel_view")}),[f,y,C,E]),_()?React.createElement(r.PluginPostPublishPanel,b,React.createElement(s.PanelRow,null,React.createElement("p",null,__("Reach a larger audience boosting the content to the WordPress.com community of blogs and sites.","jetpack-blaze"))),React.createElement("div",{role:"link",className:"post-publish-panel__postpublish-buttons",tabIndex:0,onClick:m,onKeyDown:m},React.createElement(s.Button,{variant:"secondary",href:p?`${n}tools.php?page=advertising#!/advertising/posts/promote/post-${w}/${h}`:(0,e.Z)("jetpack-blaze",{site:h,query:`blazepress-widget=post-${w}`}),target:"_top"},(0,u.sprintf)(/* translators: %s is the post type (e.g. Post, Page, Product). */
__("Blaze this %s","jetpack-blaze"),k.toLowerCase()),!p&&React.createElement(d.Z,{icon:l.Z,className:"blaze-panel-outbound-link__external_icon"})))):null};(0,p.getPlugin)("jetpack-blaze")||(0,p.registerPlugin)("jetpack-blaze",{render:h})})()})();