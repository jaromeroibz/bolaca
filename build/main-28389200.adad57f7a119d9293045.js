/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 
    General Styles used on every website (Don't Repeat Yourself)
*/

a {
  text-decoration: none;
  color: inherit;
}

.navbar {
    background-color: white;
    font-family: "Playwrite IT Moderna", cursive;
    font-size: 85%;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    position: fixed;
    top: 0;
    z-index: 9999;
    height: 110px;
}
.cartButton{
    text-decoration: none;
    color: black;
}

@media(max-width: 991px){
    .sidebar{
        background-color: whitesmoke;
        backdrop-filter: blur(10px);
    }
}
.dropdown-item{
    font-size: 85%;
}
.fa-cart-shopping{
    position: absolute;
    top: 49px;
    color: black;

}
.landing-page{
    padding-top: 100px;
}
.card-body h5.card-title {
  text-decoration: none !important; /* Removes underline */
  color: inherit; /* Inherits color from parent */
}

.search-bar-results{
    padding-top: 200px;
}

.hero-carousel {
    height: calc(75vh - 3.5rem);
}

.c-item{
    height:480px;
}
.c-img{
    height:100%;
    object-fit: cover;
}
li::marker{font-size:0;}
.productos, .detalle-producto{
    padding-top: 150px;
    padding-left: 50px;
}
.cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 2rem;
}

/* Update these CSS rules */

/* Card container - make sure all cards have exactly the same dimensions */
.card {
  height: 477px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  overflow: hidden; /* This prevents content from spilling out */
}

/* Image container - fixed height with object-fit */
.card-img-top {
  width: 100%;
  height: 250px; /* Fixed height for all images */
  object-fit: contain; /* This maintains aspect ratio */
  object-position: center; /* Centers the image */
  padding: 10px;
  background-color: #ffffff; /* Optional: adds a white background */
}

/* Card body - takes remaining space */
.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

/* Product title - control height and overflow */
.card-title {
  font-size: 16px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  height: 48px; /* Fixed height for title */
}

/* Price - consistent styling */
.card-text {
  font-weight: bold;
  margin-bottom: 15px;
}

/* Button container - push to bottom */
.card-body .d-flex {
  margin-top: auto;
  width: 100%;
}

/* Cards grid - ensure consistent sizing */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card-price, .card-body{
    font-weight: normal;
}
.smallimages{
    padding-left: 20px;;
}
.smallimages img{
    height:60px;
    margin: 10px 0;
    display: block;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.2s;
}
.smallimages img .active{
    opacity:1;
}
.smallimages img:hover{
    opacity:1
}
.product-info{
    padding: 30px 30px 0px 0px;
}
.see-more-button{
    align-items: center;
    padding: 10px;
    display: flex;
    height: 100%;
    justify-content: center;
    background: white;
    color: black;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 6px;
}
.add-cart-button {
  align-items: center;
  display: flex;
  height: 48px;  /* Specific height instead of 100% */
  justify-content: center;
  background: black;
  color: white;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 6px;
  padding: 12px 20px;  /* Added padding for better proportions */
  border: none;  /* Optional: removes default button border */
  width: 100%;  /* Makes sure button takes full width of container */
}

.buy-now-button{
    align-items: center;
    padding: 10px 90px 10px 89px;
    display: flex;
    height: 100%;
    justify-content: center;
    background: black;
    color: white;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 6px;
}
.add-cart-details-button{
    align-items: center;
    padding: 10px 80px 10px 80px;
    display: flex;
    height: 100%;
    justify-content: center;
    background: white;
    color: black;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 6px;
}
.leftarrow, .rightarrow {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
.leftarrow {
    position: absolute;
    top: 875px;
    left: 250px; 
}
.rightarrow{
    position: absolute;
    top: 875px;
    right: 250px; 
}
.slick-slider {
    margin-inline: -30px !important;
  }

.slick-slide {
    >div { 
      margin-inline: 15px !important;
    }
  }

.footer-body{
    background: #ef9453;
    height: 400px;
}
.cart{
    padding-top: 200px;
}
.product-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cart-product {
  padding: 0 10px;
}

.qty {
  min-width: 70px;
}

.total-price {
  min-width: 60px;
  text-align: right;
}

.card-img-top{
    align-items: center;
}
.product-list, .resumen-compra{
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0 rgba(0, 0, 0, 0.1)
}

.qty-btn{
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #eee;
    color: #555;
    border-radius: 50%;
    cursor: pointer;
}

hr.custom-hr {
    width: 66%;
  }

  /* For small devices and larger (≥576px) */
  @media (min-width: 576px) {
    hr.custom-hr {
      width: 64%;
    }
  }
  
  /* For medium devices and larger (≥768px) */
  @media (min-width: 768px) {
    hr.custom-hr {
      width: 87%;
    }
  }
  
  /* For large devices and larger (≥992px) */
  @media (min-width: 992px) {
    hr.custom-hr {
      width: 117%;
    }
  }

/* For x-large devices and larger (≥992px) */
@media (min-width: 1200px) {
    hr.custom-hr {
        width: 100%;
    }
    }

.fa-phone, .fa-instagram, .fa-facebook, .fa-whatsapp{

    text-decoration: none;
    color: black;
}

@media (max-width: 992px) {
    .navbar-brand img {
      max-width: 160px;
      max-height: 50px;
    }
  }
  
  @media (max-width: 768px) {
    .navbar-brand img {
      max-width: 120px;
      max-height: 50px;
    }
  }


/* Footer Styles*/
/* Import Google Fonts for the matching style */

.footer-container {
  background-color: hsl(0, 0%, 100%);
  color: #000000; /* White text */
  padding: 30px 0;
  text-align: center;
  font-family: "Montserrat", Arial, sans-serif; /* Matching the font style */
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px; /* Adds space between sections */
  margin-bottom: 20px;
}

.footer-section {
  text-align: center;
}

.footer-section h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 1.8; /* Space between list items */
}

.footer-section li {
  font-weight: 300;
}

.footer-logo img {
  width: 120px; /* Adjust size of the logo */
  height: auto;
}

.footer-bottom {
  margin-top: 20px;
  font-size: 0.9rem;
  font-weight: 300;
}

.quantity-form {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  gap: 8px;
}

.quantity-label {
  font-weight: bold;
}

.quantity-value {
  font-weight: bold;
  color: #007bff; /* Matches the blue color */
}

.quantity-select {
  border: none;
  background: transparent;
  font-size: 16px;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.quantity-select:focus {
  outline: none;
}

.custom-quantity {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.custom-quantity-input {
  border: 1px solid #ddd;
  padding: 4px 8px;
  font-size: 16px;
  border-radius: 4px;
  width: 60px;
}

.apply-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.apply-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.stock-info {
  margin-top: 8px;
  font-size: 14px;
  color: #777;
}

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4769:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/front/styles/index.css
var styles = __webpack_require__(1992);
;// ./src/front/styles/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const front_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js
var react_google_recaptcha_v3_esm = __webpack_require__(9123);
// EXTERNAL MODULE: ./src/front/js/component/backendURL.js + 1 modules
var backendURL = __webpack_require__(6690);
// EXTERNAL MODULE: ./src/front/js/store/appContext.js + 1 modules
var appContext = __webpack_require__(3398);
// EXTERNAL MODULE: ./src/front/js/component/navbar.js
var navbar = __webpack_require__(5809);
// EXTERNAL MODULE: ./src/front/js/component/footer.js
var footer = __webpack_require__(8908);
// EXTERNAL MODULE: ./src/front/js/component/landingPage.js
var landingPage = __webpack_require__(4531);
// EXTERNAL MODULE: ./src/front/js/component/productos.js
var productos = __webpack_require__(1750);
// EXTERNAL MODULE: ./src/front/js/component/detalleProducto.js
var detalleProducto = __webpack_require__(7976);
// EXTERNAL MODULE: ./src/front/js/component/shoppingCart.js
var shoppingCart = __webpack_require__(2593);
// EXTERNAL MODULE: ./src/front/js/component/contacto.js
var contacto = __webpack_require__(8902);
// EXTERNAL MODULE: ./src/front/js/component/success.js
var success = __webpack_require__(188);
// EXTERNAL MODULE: ./src/front/js/component/searchBarResults.js
var searchBarResults = __webpack_require__(2254);
// EXTERNAL MODULE: ./src/front/js/component/login.js
var login = __webpack_require__(1250);
// EXTERNAL MODULE: ./src/front/js/component/logout.js
var logout = __webpack_require__(3589);
// EXTERNAL MODULE: ./src/front/js/component/creadores.js + 2 modules
var creadores = __webpack_require__(71);
// EXTERNAL MODULE: ./src/front/js/component/errorBoundary.js
var errorBoundary = __webpack_require__(8247);
;// ./src/front/js/layout.js




// Direct imports for components
















// Loading component
var LoadingSpinner = function LoadingSpinner() {
  return /*#__PURE__*/react.createElement("div", {
    className: "d-flex justify-content-center align-items-center",
    style: {
      height: "100vh"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "spinner-border",
    role: "status"
  }, /*#__PURE__*/react.createElement("span", {
    className: "visually-hidden"
  }, "Loading...")));
};

// Create your first component
var Layout = function Layout() {
  var basename = "/" || 0;

  // Render BackendURL if BACKEND_URL is missing
  if (false) {}
  return /*#__PURE__*/react.createElement(errorBoundary/* default */.A, null, /*#__PURE__*/react.createElement(appContext/* AppContextProvider */.QG, null, /*#__PURE__*/react.createElement(react_google_recaptcha_v3_esm/* GoogleReCaptchaProvider */.G3, {
    reCaptchaKey: "6Ldl6v8qAAAAADN4R2hbNfeBQdSnpFiQHx7PHscx"
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(LoadingSpinner, null)
  }, /*#__PURE__*/react.createElement(dist/* BrowserRouter */.Kd, {
    basename: basename
  }, /*#__PURE__*/react.createElement(navbar/* default */.A, null), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(landingPage/* default */.A, null),
    path: "/"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(productos/* default */.A, null),
    path: "/productos"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(detalleProducto/* default */.A, null),
    path: "/detalleproductos/:theid"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(shoppingCart/* default */.A, null),
    path: "/cart"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(contacto/* default */.A, null),
    path: "/contacto"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(success/* default */.A, null),
    path: "/success"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(searchBarResults/* default */.A, null),
    path: "/searchbarresults"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(login/* default */.A, null),
    path: "/login"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(logout/* default */.A, null),
    path: "/logout"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    element: /*#__PURE__*/react.createElement(creadores/* default */.A, null),
    path: "/creadores"
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement("div", {
      className: "container text-center mt-5"
    }, /*#__PURE__*/react.createElement("h1", null, "404 - Page Not Found!"), /*#__PURE__*/react.createElement("p", null, "The page you're looking for doesn't exist."))
  })), /*#__PURE__*/react.createElement(footer/* default */.A, null))))));
};
/* harmony default export */ const layout = (Layout);
;// ./src/front/js/index.js
// Import React into the bundle

 // Use 'react-dom/client' for React 18+

// Include your index.scss file into the bundle


// Import your own components


// Render your React application
var root = client.createRoot(document.querySelector("#app")); // Create root with React 18 API
root.render(/*#__PURE__*/react.createElement(layout, null)); // Render the Layout component

/***/ }),

/***/ 3398:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BR: () => (/* binding */ AppContext),
  QG: () => (/* binding */ AppContextProvider)
});

// UNUSED EXPORTS: withContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./src/front/js/store/flux.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var getState = function getState(_ref) {
  var getStore = _ref.getStore,
    getActions = _ref.getActions,
    setStore = _ref.setStore;
  return {
    store: {
      message: null,
      auth: false,
      error: null,
      loading: false,
      users: [],
      demo: [{
        title: "FIRST",
        background: "white",
        initial: "white"
      }, {
        title: "SECOND",
        background: "white",
        initial: "white"
      }],
      products: [],
      categories: [],
      productDetails: [],
      category: [],
      productsByCategory: [],
      cart: [],
      preferenceId: [],
      filteredProducts: [],
      brands: [],
      productsByBrands: []
    },
    actions: {
      getShoppingCart: function getShoppingCart() {
        try {
          var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
          if (JSON.stringify(getStore().cart) !== JSON.stringify(cart)) {
            setStore({
              cart: cart
            });
          }
        } catch (error) {
          console.error("Error retrieving shopping cart:", error);
        }
      },
      addToCart: function addToCart(product) {
        var store = getStore(); // Get the current store state
        var cart = (store === null || store === void 0 ? void 0 : store.cart) || []; // Ensure cart is always an array

        console.log("Current cart before adding:", cart);
        var exist = cart.find(function (item) {
          return item.id === product.id;
        });
        var updatedCart;
        if (exist) {
          console.log("Product exists, increasing quantity...");
          updatedCart = cart.map(function (item) {
            return item.id === product.id ? _objectSpread(_objectSpread({}, item), {}, {
              qty: item.qty + 1
            }) : item;
          });
        } else {
          console.log("Product does not exist, adding new product...");
          updatedCart = [].concat(_toConsumableArray(cart), [_objectSpread(_objectSpread({}, product), {}, {
            qty: 1
          })]);
        }
        console.log("Updated cart after adding:", updatedCart);
        setStore({
          cart: updatedCart
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist cart
      },
      removeFromCart: function removeFromCart(product) {
        var store = getStore();

        // Check if the product exists in the cart
        var exist = store.cart.find(function (item) {
          return item.id === product.id;
        });
        if (!exist) {
          console.error("Product not found in cart.");
          return; // Exit if the product is not found
        }

        // If quantity is 1, remove the product from the cart
        if (exist.qty === 1) {
          var newCartItems = store.cart.filter(function (item) {
            return item.id !== product.id;
          });
          setStore({
            cart: newCartItems
          });
          localStorage.setItem('cart', JSON.stringify(newCartItems));
        } else {
          // If quantity is more than 1, decrease the quantity by 1
          var _newCartItems = store.cart.map(function (item) {
            return item.id === product.id ? _objectSpread(_objectSpread({}, item), {}, {
              qty: item.qty - 1
            }) : item;
          });
          setStore({
            cart: _newCartItems
          });
          localStorage.setItem('cart', JSON.stringify(_newCartItems));
        }
      },
      getProducts: function () {
        var _getProducts = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var url, response, errorText, contentType, textResponse, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                if (true) {
                  _context.next = 4;
                  break;
                }
                console.error("BACKEND_URL is not defined.");
                return _context.abrupt("return");
              case 4:
                url = "".concat("https://api.bolaca.cl", "/api/get_all_products");
                console.log("Attempting to fetch products from:", url);
                _context.next = 8;
                return fetch(url, {
                  method: 'GET',
                  credentials: 'include',
                  // Include cookies for cross-origin requests
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    // You can add custom headers here if needed for your API
                  },
                  mode: 'cors' // Explicitly set CORS mode
                });
              case 8:
                response = _context.sent;
                // Log full response details
                console.log("Response status:", response.status);
                console.log("Response headers:", Object.fromEntries(_toConsumableArray(response.headers)));

                // Check if response is ok before parsing JSON
                if (response.ok) {
                  _context.next = 18;
                  break;
                }
                _context.next = 14;
                return response.text();
              case 14:
                errorText = _context.sent;
                console.error("Server returned ".concat(response.status, " ").concat(response.statusText));
                console.error("Error response body:", errorText);
                throw new Error("HTTP error! Status: ".concat(response.status, ", Message: ").concat(errorText.substring(0, 200)));
              case 18:
                // Check content type
                contentType = response.headers.get('content-type');
                if (!(!contentType || !contentType.includes('application/json'))) {
                  _context.next = 26;
                  break;
                }
                _context.next = 22;
                return response.text();
              case 22:
                textResponse = _context.sent;
                console.error("Expected JSON but received:", contentType);
                console.error("Response preview:", textResponse.substring(0, 200));
                throw new TypeError("Expected JSON response but received ".concat(contentType || 'unknown', " content type"));
              case 26:
                _context.next = 28;
                return response.json();
              case 28:
                data = _context.sent;
                console.log("Successfully parsed JSON data:", data);
                setStore({
                  products: data
                });
                _context.next = 36;
                break;
              case 33:
                _context.prev = 33;
                _context.t0 = _context["catch"](0);
                console.error("Error fetching products:", _context.t0);
                // You could also add state handling for the error
                // setStore({ productError: error.message });
              case 36:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 33]]);
        }));
        function getProducts() {
          return _getProducts.apply(this, arguments);
        }
        return getProducts;
      }(),
      getProductDetails: function () {
        var _getProductDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(result) {
          var idToDisplay, response, data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                idToDisplay = result.id;
                _context2.next = 4;
                return fetch("https://api.bolaca.cl" + '/api/get_product/' + idToDisplay);
              case 4:
                response = _context2.sent;
                _context2.next = 7;
                return response.json();
              case 7:
                data = _context2.sent;
                if (response.ok) {
                  setStore({
                    productDetails: data
                  });
                }
                _context2.next = 14;
                break;
              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
              case 14:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 11]]);
        }));
        function getProductDetails(_x) {
          return _getProductDetails.apply(this, arguments);
        }
        return getProductDetails;
      }(),
      getProductByCategory: function () {
        var _getProductByCategory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(theid) {
          var response, data;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return fetch("https://api.bolaca.cl" + '/api/get_product_by_category/' + theid);
              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return response.json();
              case 6:
                data = _context3.sent;
                if (response.ok) {
                  setStore({
                    productsByCategory: data
                  });
                }
                _context3.next = 13;
                break;
              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
              case 13:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 10]]);
        }));
        function getProductByCategory(_x2) {
          return _getProductByCategory.apply(this, arguments);
        }
        return getProductByCategory;
      }(),
      getCategory: function () {
        var _getCategory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(result) {
          var idToDisplay, response, data;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                idToDisplay = result.id;
                _context4.next = 4;
                return fetch("https://api.bolaca.cl" + '/api/get_category/' + idToDisplay);
              case 4:
                response = _context4.sent;
                _context4.next = 7;
                return response.json();
              case 7:
                data = _context4.sent;
                if (response.ok) {
                  setStore({
                    category: data
                  });
                }
                _context4.next = 14;
                break;
              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
              case 14:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[0, 11]]);
        }));
        function getCategory(_x3) {
          return _getCategory.apply(this, arguments);
        }
        return getCategory;
      }(),
      getCategories: function () {
        var _getCategories = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var response, data;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                if (true) {
                  _context5.next = 4;
                  break;
                }
                console.error("BACKEND_URL is not defined.");
                return _context5.abrupt("return");
              case 4:
                _context5.next = 6;
                return fetch("".concat("https://api.bolaca.cl", "/api/get_category"));
              case 6:
                response = _context5.sent;
                if (response.ok) {
                  _context5.next = 9;
                  break;
                }
                throw new Error("HTTP error! status: ".concat(response.status));
              case 9:
                _context5.next = 11;
                return response.json();
              case 11:
                data = _context5.sent;
                setStore({
                  categories: data
                });
                _context5.next = 18;
                break;
              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);
                console.error("Error fetching categories:", _context5.t0);
              case 18:
              case "end":
                return _context5.stop();
            }
          }, _callee5, null, [[0, 15]]);
        }));
        function getCategories() {
          return _getCategories.apply(this, arguments);
        }
        return getCategories;
      }(),
      getBrands: function () {
        var _getBrands = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          var response, data;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return fetch("https://api.bolaca.cl" + '/api/get_all_brands');
              case 3:
                response = _context6.sent;
                _context6.next = 6;
                return response.json();
              case 6:
                data = _context6.sent;
                if (response.ok) {
                  setStore({
                    brands: data
                  });
                }
                _context6.next = 13;
                break;
              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);
              case 13:
              case "end":
                return _context6.stop();
            }
          }, _callee6, null, [[0, 10]]);
        }));
        function getBrands() {
          return _getBrands.apply(this, arguments);
        }
        return getBrands;
      }(),
      getProductsByBrands: function () {
        var _getProductsByBrands = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(result) {
          var idToDisplay, response, data;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                console.log(result);
                idToDisplay = result.id;
                _context7.next = 5;
                return fetch("https://api.bolaca.cl" + '/api/get_all_product_by_brand/' + idToDisplay);
              case 5:
                response = _context7.sent;
                _context7.next = 8;
                return response.json();
              case 8:
                data = _context7.sent;
                if (response.ok) {
                  setStore({
                    productsByBrands: data
                  });
                }
                _context7.next = 15;
                break;
              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](0);
                console.log(_context7.t0);
              case 15:
              case "end":
                return _context7.stop();
            }
          }, _callee7, null, [[0, 12]]);
        }));
        function getProductsByBrands(_x4) {
          return _getProductsByBrands.apply(this, arguments);
        }
        return getProductsByBrands;
      }(),
      addToCartQty: function addToCartQty(product, quantity) {
        var store = getStore();
        var productIndex = store.cart.findIndex(function (item) {
          return item.id === product.id;
        });
        if (productIndex !== -1) {
          var updatedCart = _toConsumableArray(store.cart);
          updatedCart[productIndex].qty += quantity;
          setStore({
            cart: updatedCart
          });
        } else {
          var updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
            qty: quantity
          });
          setStore({
            cart: [].concat(_toConsumableArray(store.cart), [updatedProduct])
          });
        }
      },
      loginAdmin: function () {
        var _loginAdmin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(email, password) {
          var requestOptions, response, data;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                console.log('Login desde flux');
                console.log("https://api.bolaca.cl");
                requestOptions = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                    "email": email,
                    "password": password
                  })
                };
                _context8.next = 5;
                return fetch("https://api.bolaca.cl" + "/api/admin_login", requestOptions);
              case 5:
                response = _context8.sent;
                _context8.next = 8;
                return response.json();
              case 8:
                data = _context8.sent;
                if (!(response.status === 200)) {
                  _context8.next = 16;
                  break;
                }
                setStore({
                  auth: true
                });
                setStore({
                  users: data
                });
                console.log(data);
                localStorage.setItem("token", data.access_token);
                localStorage.setItem("auth", true);
                return _context8.abrupt("return", data.redirect);
              case 16:
                return _context8.abrupt("return", response.status);
              case 17:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        function loginAdmin(_x5, _x6) {
          return _loginAdmin.apply(this, arguments);
        }
        return loginAdmin;
      }(),
      logout: function logout() {
        console.log('Log out desde flux');
        setStore({
          auth: false
        });
        localStorage.removeItem("token");
        localStorage.removeItem("auth");
      },
      saveToDelete: function saveToDelete(theid) {
        setStore({
          idToDelete: theid
        });
      },
      createPreference: function () {
        var _createPreference = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(preferencia) {
          var requestOptions, response, data;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                requestOptions = {
                  method: 'POST',
                  body: JSON.stringify(preferencia)
                };
                _context9.next = 3;
                return fetch("https://api.bolaca.cl" + '/api/add_preference', requestOptions);
              case 3:
                response = _context9.sent;
                _context9.next = 6;
                return response.json();
              case 6:
                data = _context9.sent;
                if (response.ok === 200) {
                  setStore({
                    preferenceId: data.id
                  });
                }
                console.log(data.id);
              case 9:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }));
        function createPreference(_x7) {
          return _createPreference.apply(this, arguments);
        }
        return createPreference;
      }(),
      // filterProducts: (query) => {
      //     const store = getStore();
      //     const lowerCaseQuery = query.toLowerCase();

      // 	console.log("Current store:", store); // Check initial state
      // 	console.log("Search query:", lowerCaseQuery);

      // 	// First, make sure products exist in your store
      // 	if (!store.products) {
      // 		console.error("No products found in store");
      // 		return;
      // 	}
      //     const filtered = store.products.filter(product => {
      // 		console.log("Checking product:", product);
      //         return (
      //             product.name.toLowerCase().includes(lowerCaseQuery) ||
      //             product.description.toLowerCase().includes(lowerCaseQuery) ||
      //             product.category_name.toLowerCase().includes(lowerCaseQuery)
      //         );
      //     });
      // 	console.log("Filtered results:", filtered);

      //     setStore({ ...store, filteredProducts: filtered });

      // 	console.log("Updated store:", getStore());
      // },
      filterProducts: function filterProducts(query) {
        var store = getStore();
        var lowerCaseQuery = query.toLowerCase();

        // If products aren't loaded yet, load them first
        if (!store.products || store.products.length === 0) {
          actions.getProducts(); // Make sure you have this action
          return;
        }

        // Debug logs
        console.log("Current store products:", store.products);
        console.log("Query:", lowerCaseQuery);

        // Check if products exist and have data
        if (!store.products || store.products.length === 0) {
          console.error("No products in store");
          return;
        }

        // Log a sample product to check its structure
        console.log("Sample product structure:", store.products[0]);
        var filtered = store.products.filter(function (product) {
          var _product$name, _product$description, _product$category_nam;
          // Debug each product comparison
          console.log("Checking product:", {
            name: (_product$name = product.name) === null || _product$name === void 0 ? void 0 : _product$name.toLowerCase(),
            description: (_product$description = product.description) === null || _product$description === void 0 ? void 0 : _product$description.toLowerCase(),
            category: (_product$category_nam = product.category_name) === null || _product$category_nam === void 0 ? void 0 : _product$category_nam.toLowerCase()
          });

          // Add null checks for each property
          var nameMatch = product.name && product.name.toLowerCase().includes(lowerCaseQuery);
          var descMatch = product.description && product.description.toLowerCase().includes(lowerCaseQuery);
          var catMatch = product.category_name && product.category_name.toLowerCase().includes(lowerCaseQuery);
          return nameMatch || descMatch || catMatch;
        });
        console.log("Filtered results:", filtered);
        setStore(_objectSpread(_objectSpread({}, store), {}, {
          filteredProducts: filtered
        }));
      },
      emptyCart: function emptyCart() {
        setStore({
          cart: {}
        });
      }
    }
  };
};
/* harmony default export */ const flux = (getState);
;// ./src/front/js/store/appContext.js
function appContext_typeof(o) { "@babel/helpers - typeof"; return appContext_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, appContext_typeof(o); }
function appContext_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ appContext_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == appContext_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(appContext_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function appContext_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function appContext_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { appContext_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { appContext_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function appContext_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function appContext_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? appContext_ownKeys(Object(t), !0).forEach(function (r) { appContext_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : appContext_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function appContext_defineProperty(e, r, t) { return (r = appContext_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function appContext_toPropertyKey(t) { var i = appContext_toPrimitive(t, "string"); return "symbol" == appContext_typeof(i) ? i : i + ""; }
function appContext_toPrimitive(t, r) { if ("object" != appContext_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != appContext_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || appContext_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function appContext_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return appContext_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? appContext_arrayLikeToArray(r, a) : void 0; } }
function appContext_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



// Create and export the context
var AppContext = /*#__PURE__*/(0,react.createContext)({
  store: {
    products: [],
    categories: [],
    cart: [] // Ensure cart is part of the initial state
  },
  actions: {}
});

// Create the context provider component
var AppContextProvider = function AppContextProvider(_ref) {
  var children = _ref.children;
  var _useState = (0,react.useState)(function () {
      var cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage

      var initialState = flux({
        getStore: function getStore() {
          return appContext_objectSpread(appContext_objectSpread({}, state.store), {}, {
            cart: JSON.parse(localStorage.getItem("cart")) || []
          });
        },
        // Always return latest cart
        getActions: function getActions() {
          return state === null || state === void 0 ? void 0 : state.actions;
        },
        // Return actions
        setStore: function setStore(updatedStore) {
          setState(function (prevState) {
            var newState = appContext_objectSpread(appContext_objectSpread({}, prevState), {}, {
              store: appContext_objectSpread(appContext_objectSpread({}, prevState.store), updatedStore) // Update state with the new store
            });

            // If cart is updated, save it to localStorage
            if (updatedStore.cart) {
              localStorage.setItem("cart", JSON.stringify(newState.store.cart));
            }
            return newState;
          });
        }
      });

      // Merge cart from localStorage into initial state
      return appContext_objectSpread(appContext_objectSpread({}, initialState), {}, {
        store: appContext_objectSpread(appContext_objectSpread({}, initialState.store), {}, {
          cart: cartFromLocalStorage // Initialize cart from localStorage if available
        })
      });
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0,react.useEffect)(function () {
    var initializeApp = /*#__PURE__*/function () {
      var _ref2 = appContext_asyncToGenerator(/*#__PURE__*/appContext_regeneratorRuntime().mark(function _callee() {
        var _state$actions;
        return appContext_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!(state !== null && state !== void 0 && (_state$actions = state.actions) !== null && _state$actions !== void 0 && _state$actions.getShoppingCart)) {
                _context.next = 4;
                break;
              }
              _context.next = 4;
              return state.actions.getShoppingCart();
            case 4:
              _context.next = 9;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.error("Error initializing app:", _context.t0);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6]]);
      }));
      return function initializeApp() {
        return _ref2.apply(this, arguments);
      };
    }();
    initializeApp();
  }, [state === null || state === void 0 ? void 0 : state.actions]);
  return /*#__PURE__*/react.createElement(AppContext.Provider, {
    value: state
  }, children);
};

// HOC for legacy support
var withContext = function withContext(Component) {
  return function ContextWrapper(props) {
    return /*#__PURE__*/React.createElement(AppContextProvider, null, /*#__PURE__*/React.createElement(Component, props));
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			631: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_hello_webapp"] = self["webpackChunkreact_hello_webapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [264,997,472,861,891,645,548,425,176,765,854,489,807,906], () => (__webpack_require__(4769)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;