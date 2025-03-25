"use strict";
(self["webpackChunkreact_hello_webapp"] = self["webpackChunkreact_hello_webapp"] || []).push([[891],{

/***/ 5338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(961);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(2551);
} else {}


/***/ }),

/***/ 9123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G3: () => (/* binding */ h),
/* harmony export */   _Y: () => (/* binding */ g)
/* harmony export */ });
/* unused harmony exports GoogleReCaptcha, GoogleReCaptchaConsumer, GoogleReCaptchaContext, withGoogleReCaptcha */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* provided dependency */ var process = __webpack_require__(5606);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)};function u(e,t,r,o){return new(r||(r=Promise))((function(n,a){function c(e){try{s(o.next(e))}catch(e){a(e)}}function i(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}s((o=o.apply(e,t||[])).next())}))}function l(e,t){var r,o,n,a,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(n=c.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){c.label=a[1];break}if(6===a[0]&&c.label<n[1]){c.label=n[1],n=a;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(a);break}n[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var f,p=function(e){var t;e?function(e){if(e)for(;e.lastChild;)e.lastChild.remove()}("string"==typeof e?document.getElementById(e):e):(t=document.querySelector(".grecaptcha-badge"))&&t.parentNode&&document.body.removeChild(t.parentNode)},d=function(e,t){p(t),window.___grecaptcha_cfg=void 0;var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');e&&e.remove()}()},y=function(e){var t=e.render,r=e.onLoadCallbackName,o=e.language,n=e.onLoad,a=e.useRecaptchaNet,c=e.useEnterprise,i=e.scriptProps,s=void 0===i?{}:i,u=s.nonce,l=void 0===u?"":u,f=s.defer,p=void 0!==f&&f,d=s.async,y=void 0!==d&&d,m=s.id,v=void 0===m?"":m,b=s.appendTo,h=v||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(h))n();else{var g=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:c,useRecaptchaNet:a}),S=document.createElement("script");S.id=h,S.src=g+"?render="+t+("explicit"===t?"&onload="+r:"")+(o?"&hl="+o:""),l&&(S.nonce=l),S.defer=!!p,S.async=!!y,S.onload=n,("body"===b?document.body:document.getElementsByTagName("head")[0]).appendChild(S)}},m=function(e){"undefined"!=typeof process&&!!"MISSING_ENV_VAR"&&"production"!=="production"||console.warn(e)};!function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"}(f||(f={}));var v=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}}),b=v.Consumer;function h(t){var i=t.reCaptchaKey,u=t.useEnterprise,l=void 0!==u&&u,p=t.useRecaptchaNet,b=void 0!==p&&p,h=t.scriptProps,g=t.language,S=t.container,w=t.children,$=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),C=$[0],P=$[1],x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(i),E=JSON.stringify(h),R=JSON.stringify(null==S?void 0:S.parameters);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(i){var e=(null==h?void 0:h.id)||"google-recaptcha-v3",t=(null==h?void 0:h.onLoadCallbackName)||"onRecaptchaLoadCallback";window[t]=function(){var e=l?window.grecaptcha.enterprise:window.grecaptcha,t=s({badge:"inline",size:"invisible",sitekey:i},(null==S?void 0:S.parameters)||{});x.current=e.render(null==S?void 0:S.element,t)};return y({render:(null==S?void 0:S.element)?"explicit":i,onLoadCallbackName:t,useEnterprise:l,useRecaptchaNet:b,scriptProps:h,language:g,onLoad:function(){if(window&&window.grecaptcha){var e=l?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){P(e)}))}else m("<GoogleRecaptchaProvider /> "+f.SCRIPT_NOT_AVAILABLE)},onError:function(){m("Error loading google recaptcha script")}}),function(){d(e,null==S?void 0:S.element)}}m("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[l,b,E,R,g,i,null==S?void 0:S.element]);var M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){if(!C||!C.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return C.execute(x.current,{action:e})}),[C,x]),N=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{executeRecaptcha:C?M:void 0,container:null==S?void 0:S.element}}),[M,C,null==S?void 0:S.element]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(v.Provider,{value:N},w)}var g=function(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v)};function S(t){var r=this,o=t.action,a=t.onVerify,c=t.refreshReCaptcha,i=g();n((function(){var e=i.executeRecaptcha;if(e){u(r,void 0,void 0,(function(){var t;return l(this,(function(r){switch(r.label){case 0:return[4,e(o)];case 1:return t=r.sent(),a?(a(t),[2]):(m("Please define an onVerify function"),[2])}}))}))}}),[o,a,c,i]);var s=i.container;return"string"==typeof s?e.createElement("div",{id:s}):null}function w(e,t){return e(t={exports:{}},t.exports),t.exports
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var $="function"==typeof Symbol&&Symbol.for,C=$?Symbol.for("react.element"):60103,P=$?Symbol.for("react.portal"):60106,x=$?Symbol.for("react.fragment"):60107,E=$?Symbol.for("react.strict_mode"):60108,R=$?Symbol.for("react.profiler"):60114,M=$?Symbol.for("react.provider"):60109,N=$?Symbol.for("react.context"):60110,O=$?Symbol.for("react.async_mode"):60111,_=$?Symbol.for("react.concurrent_mode"):60111,T=$?Symbol.for("react.forward_ref"):60112,j=$?Symbol.for("react.suspense"):60113,L=$?Symbol.for("react.suspense_list"):60120,k=$?Symbol.for("react.memo"):60115,F=$?Symbol.for("react.lazy"):60116,A=$?Symbol.for("react.block"):60121,V=$?Symbol.for("react.fundamental"):60117,z=$?Symbol.for("react.responder"):60118,G=$?Symbol.for("react.scope"):60119;function I(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case C:switch(e=e.type){case O:case _:case x:case R:case E:case j:return e;default:switch(e=e&&e.$$typeof){case N:case T:case F:case k:case M:return e;default:return t}}case P:return t}}}function D(e){return I(e)===_}var q={AsyncMode:O,ConcurrentMode:_,ContextConsumer:N,ContextProvider:M,Element:C,ForwardRef:T,Fragment:x,Lazy:F,Memo:k,Portal:P,Profiler:R,StrictMode:E,Suspense:j,isAsyncMode:function(e){return D(e)||I(e)===O},isConcurrentMode:D,isContextConsumer:function(e){return I(e)===N},isContextProvider:function(e){return I(e)===M},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===C},isForwardRef:function(e){return I(e)===T},isFragment:function(e){return I(e)===x},isLazy:function(e){return I(e)===F},isMemo:function(e){return I(e)===k},isPortal:function(e){return I(e)===P},isProfiler:function(e){return I(e)===R},isStrictMode:function(e){return I(e)===E},isSuspense:function(e){return I(e)===j},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===x||e===_||e===R||e===E||e===j||e===L||"object"==typeof e&&null!==e&&(e.$$typeof===F||e.$$typeof===k||e.$$typeof===M||e.$$typeof===N||e.$$typeof===T||e.$$typeof===V||e.$$typeof===z||e.$$typeof===G||e.$$typeof===A)},typeOf:I},B=w((function(e,t){ false&&0})),J=(B.AsyncMode,B.ConcurrentMode,B.ContextConsumer,B.ContextProvider,B.Element,B.ForwardRef,B.Fragment,B.Lazy,B.Memo,B.Portal,B.Profiler,B.StrictMode,B.Suspense,B.isAsyncMode,B.isConcurrentMode,B.isContextConsumer,B.isContextProvider,B.isElement,B.isForwardRef,B.isFragment,B.isLazy,B.isMemo,B.isPortal,B.isProfiler,B.isStrictMode,B.isSuspense,B.isValidElementType,B.typeOf,w((function(e){ true?e.exports=q:0}))),K={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},H={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Q={};function W(e){return J.isMemo(e)?H:Q[e.$$typeof]||K}Q[J.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Q[J.Memo]=H;var X=Object.defineProperty,Y=Object.getOwnPropertyNames,Z=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,re=Object.prototype;var oe=function e(t,r,o){if("string"!=typeof r){if(re){var n=te(r);n&&n!==re&&e(t,n,o)}var a=Y(r);Z&&(a=a.concat(Z(r)));for(var c=W(t),i=W(r),s=0;s<a.length;++s){var u=a[s];if(!(U[u]||o&&o[u]||i&&i[u]||c&&c[u])){var l=ee(r,u);try{X(t,u,l)}catch(e){}}}}return t},ne=function(t){var r=function(r){return e.createElement(b,null,(function(o){return e.createElement(t,s({},r,{googleReCaptchaProps:o}))}))};return r.displayName="withGoogleReCaptcha("+(t.displayName||t.name||"Component")+")",oe(r,t),r};
//# sourceMappingURL=react-google-recaptcha-v3.esm.js.map


/***/ }),

/***/ 2225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k5: () => (/* reexport */ GenIcon)
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// ./node_modules/react-icons/lib/iconsManifest.mjs
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "fa6",
    "name": "Font Awesome 6",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "MIT",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  },
  {
    "id": "pi",
    "name": "Phosphor Icons",
    "projectUrl": "https://github.com/phosphor-icons/core",
    "license": "MIT",
    "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
  },
  {
    "id": "lia",
    "name": "Icons8 Line Awesome",
    "projectUrl": "https://icons8.com/line-awesome",
    "license": "MIT",
    "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
  }
]
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./node_modules/react-icons/lib/iconContext.mjs

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && /*#__PURE__*/react.createContext(DefaultContext);
;// ./node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/react.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/react.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/react.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/react.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/react.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}
;// ./node_modules/react-icons/lib/index.mjs




/***/ })

}]);