"use strict";
(self["webpackChunkreact_hello_webapp"] = self["webpackChunkreact_hello_webapp"] || []).push([[807],{

/***/ 2723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/1-CURSIVA-small.7f045d308474a1fc32b5.jpg";

/***/ }),

/***/ 7009:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/Carousel1.0676a1b835b5dda9d8e8.png";

/***/ }),

/***/ 6426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/Carousel2.96f3df43c6f9ac8bcd91.png";

/***/ }),

/***/ 1635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/Carousel3.1dd1f7a23bd7d7c15e28.png";

/***/ }),

/***/ 3607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/bolaca-sin-borde-pequeña.886bf61e6fd9089da98f.jpg";

/***/ }),

/***/ 6690:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./docs/assets/env-file.png
const env_file_namespaceObject = __webpack_require__.p + "assets/images/env-file.17ffb260ce6be27c312a.png";
;// ./src/front/js/component/backendURL.js


var Dark = function Dark(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    className: "bg-dark text-white px-1 rounded"
  }, children);
};
var BackendURL = function BackendURL() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-5 w-50 mx-auto"
  }, /*#__PURE__*/React.createElement("h2", null, "Missing BACKEND_URL env variable"), /*#__PURE__*/React.createElement("p", null, "Here's a video tutorial on ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://www.awesomescreenshot.com/video/16498567?key=72dbf905fe4fa6d3224783d02a8b1b9c"
  }, "how to update your backend URL environment variable.")), /*#__PURE__*/React.createElement("p", null, "There's a file called ", /*#__PURE__*/React.createElement(Dark, null, ".env"), " that contains the environmental variables for your project."), /*#__PURE__*/React.createElement("p", null, "There's one variable called ", /*#__PURE__*/React.createElement(Dark, null, "BACKEND_URL"), " that needs to be manually set by yourself."), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Make sure you backend is running on port 3001."), /*#__PURE__*/React.createElement("li", null, "Open your API and copy the API host."), /*#__PURE__*/React.createElement("li", null, "Open the .env file (do not open the .env.example)"), /*#__PURE__*/React.createElement("li", null, "Add a new variable BACKEND_URL=", /*#__PURE__*/React.createElement(Dark, null, "your api host")), /*#__PURE__*/React.createElement("li", null, "Replace ", /*#__PURE__*/React.createElement(Dark, null, "your api host"), " with the public API URL of your flask backend sever running at port 3001")), /*#__PURE__*/React.createElement("img", {
    src: envFile
  }), /*#__PURE__*/React.createElement("p", null, "Note: If you are publishing your website to Heroku, Render.com or any other hosting you probably need to follow other steps."));
};
/* harmony default export */ const backendURL = ((/* unused pure expression or super */ null && (BackendURL)));

/***/ }),

/***/ 8902:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3413);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var ContactForm = function ContactForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    captchaVerified = _useState6[0],
    setCaptchaVerified = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!captchaVerified) {
      setError("Por favor verifica el reCAPTCHA.");
      return;
    }
    if (!email || !message) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    console.log("Formulario enviado:", {
      email: email,
      message: message
    });
    setError("");
    alert("Mensaje enviado exitosamente.");
  };
  var handleCaptchaChange = function handleCaptchaChange(value) {
    setCaptchaVerified(!!value); // Valida que el captcha se haya completado
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      paddingTop: "150px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "D\xE9janos tu mensaje"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginBottom: "15px",
      paddingTop: "30px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "email",
    style: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold"
    }
  }, "E-mail*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    id: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    style: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxSizing: "border-box"
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginBottom: "15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "message",
    style: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold"
    }
  }, "Mensaje*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    id: "message",
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    style: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      boxSizing: "border-box",
      resize: "none"
    },
    rows: "5",
    maxLength: "300",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
    style: {
      display: "block",
      textAlign: "right"
    }
  }, message.length, " / 300")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginBottom: "15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    sitekey: "6LfkgNoqAAAAAHDByLHwH2fKqIjlTZoCQuK4Pkna" // Reemplaza con tu clave de sitio de Google reCAPTCHA
    ,
    onChange: handleCaptchaChange
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      color: "red"
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    style: {
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer"
    }
  }, "Enviar")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ 71:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ creadores)
});

// UNUSED EXPORTS: CreadorCard

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./src/front/img/Angelo.png
const Angelo_namespaceObject = __webpack_require__.p + "assets/images/Angelo.19d8724e85d89bb8a029.png";
;// ./src/front/img/Natalia.png
const Natalia_namespaceObject = __webpack_require__.p + "assets/images/Natalia.60dbd49b334cb90429cc.png";
;// ./src/front/js/component/creadores.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// CreatorCard Component
var CreadorCard = function CreadorCard(_ref) {
  var imageSrc = _ref.imageSrc,
    borderColor = _ref.borderColor,
    name = _ref.name,
    role = _ref.role,
    description = _ref.description,
    alignment = _ref.alignment;
  // Dynamic alignment style
  var alignmentStyle = alignment === "right" ? "row-reverse" : "row";
  return /*#__PURE__*/react.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.card), {}, {
      flexDirection: alignmentStyle
    })
  }, /*#__PURE__*/react.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.imageContainer), {}, {
      borderColor: borderColor
    })
  }, /*#__PURE__*/react.createElement("img", {
    src: imageSrc,
    alt: name,
    style: styles.image
  })), /*#__PURE__*/react.createElement("div", {
    style: _objectSpread(_objectSpread({}, styles.content), {}, {
      textAlign: alignment === "right" ? "left" : "left"
    })
  }, /*#__PURE__*/react.createElement("h2", {
    style: styles.name
  }, name), /*#__PURE__*/react.createElement("p", {
    style: styles.role
  }, role), /*#__PURE__*/react.createElement("p", {
    style: styles.description
  }, description)));
};

// Creators Component
var Creadores = function Creadores() {
  return /*#__PURE__*/react.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/react.createElement("h1", {
    style: styles.title
  }, "Creadores"), /*#__PURE__*/react.createElement(CreadorCard, {
    imageSrc: Angelo_namespaceObject,
    borderColor: "#FFD93D",
    name: "Angelo Mendoza T.",
    role: "Trabajador Social de la Universidad Cat\xF3lica Silva Henr\xEDquez, actor de Teatro Espont\xE1neo, Playback y Teatro Debate, Mag\xEDster en \xC9tica Social y Desarrollo Humano de la Universidad Alberto Hurtado.",
    description: "Su experiencia profesional le ha permitido liderar diversos proyectos sociales para la promoci\xF3n de Derechos Humanos con ni\xF1eces, j\xF3venes, comunidades migrantes y personas en contexto de alta vulnerabilidad. Actualmente es capacitador y docente de educaci\xF3n superior en materias de \xE9tica, inteligencia emocional, liderazgo y trabajo colaborativo.",
    alignment: "left" // Image on the Left
  }), /*#__PURE__*/react.createElement(CreadorCard, {
    imageSrc: Natalia_namespaceObject,
    borderColor: "#E60012",
    name: "Natalia Romero A.",
    role: "Psic\xF3loga de la Universidad de Chile, con post\xEDtulo de especializaci\xF3n cl\xEDnica infanto juvenil en la Universidad Diego Portales, actualmente cursa el Mag\xEDster en Psicolog\xEDa Educacional de la Universidad Mayor.",
    description: "Su experiencia personal y laboral le ha permitido implementar diferentes acciones en favor de la inclusi\xF3n, promoci\xF3n de las ni\xF1eces y fortalecimiento familiar, actualmente es investigadora en educaci\xF3n y tambi\xE9n integrante de un equipo multidisciplinario para el desarrollo socio emocional.",
    alignment: "right" // Image on the Right
  }));
};

// Styles
var styles = {
  container: {
    fontFamily: "'Fredoka One', cursive",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#333",
    padding: "20px",
    paddingTop: "150px"
  },
  title: {
    color: "#E60012",
    fontSize: "3rem",
    marginBottom: "40px",
    textAlign: "center"
  },
  card: {
    display: "flex",
    flexDirection: "row",
    // Default direction
    alignItems: "center",
    marginBottom: "40px",
    paddingTop: "20px"
  },
  imageContainer: {
    borderRadius: "50%",
    borderWidth: "5px",
    borderStyle: "solid",
    padding: "5px",
    margin: "0 20px"
  },
  image: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover"
  },
  content: {
    maxWidth: "600px"
  },
  name: {
    fontSize: "2rem",
    marginBottom: "10px"
  },
  role: {
    fontSize: "1rem",
    fontWeight: "300",
    marginBottom: "10px",
    color: "#777",
    paddingTop: "10px"
  },
  description: {
    fontSize: "1rem",
    fontWeight: "300",
    color: "#777",
    paddingTop: "10px"
  }
};
/* harmony default export */ const creadores = (Creadores);


/***/ }),

/***/ 7976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7767);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4976);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var DetalleProductos = function DetalleProductos() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_appContext_js__WEBPACK_IMPORTED_MODULE_1__/* .AppContext */ .BR),
    store = _useContext.store,
    actions = _useContext.actions;
  var theid = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useParams */ .g)().theid;
  var product = store.products.find(function (item) {
    return item.id == theid;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cart = _useState2[0],
    setCart = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedQuantity = _useState4[0],
    setSelectedQuantity = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    customQuantity = _useState6[0],
    setCustomQuantity = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    currentImage = _useState8[0],
    setCurrentImage = _useState8[1];
  var productImages = [product.image, product.image2, product.image3]; // Adjust based on AWS images

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    actions.getProducts();
  }, []);
  var addToCart = function addToCart(product) {
    var quantityToAdd = selectedQuantity === "more" ? Number(customQuantity) : selectedQuantity;
    var updatedProduct = _objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityToAdd
    });
    setCart([].concat(_toConsumableArray(cart), [updatedProduct]));
    actions.addToCartQty(product, quantityToAdd);
  };
  var handleQuantityChange = function handleQuantityChange(e) {
    var value = e.target.value;
    if (value === "more") {
      setSelectedQuantity("more");
      setCustomQuantity(""); // Reset custom quantity
    } else {
      setSelectedQuantity(Number(value));
    }
  };
  var handleCustomQuantityApply = function handleCustomQuantityApply() {
    if (customQuantity && !isNaN(customQuantity) && Number(customQuantity) > 0) {
      setSelectedQuantity(Number(customQuantity));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detalle-producto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .N_, {
    to: "/productos",
    style: {
      textDecoration: "none"
    }
  }, "Volver al listado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card",
    style: {
      width: 1200,
      height: 1200
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-1 smallimages"
  }, productImages.map(function (image, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      key: index,
      src: image,
      onClick: function onClick() {
        return setCurrentImage(index);
      },
      alt: "product image",
      className: "image"
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: productImages[currentImage],
    height: 600,
    width: 600,
    alt: "Main product"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-4 product-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, product.isDestacado && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    style: {
      color: "grey"
    }
  }, "Destacado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "card-title",
    style: {
      fontWeight: "900"
    }
  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "card-price",
    style: {
      fontWeight: "400"
    }
  }, "$", product.price), product.stock === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    style: {
      fontWeight: "300"
    }
  }, "\xA1\xDAltima unidad disponible!") : product.stock === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    style: {
      fontWeight: "300"
    }
  }, "Sin Stock") : product.stock < 10 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    style: {
      fontWeight: "300"
    }
  }, "\xA1Pocas unidades disponibles!") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "quantity-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "quantity-select",
    className: "quantity-label"
  }, "Cantidad: ", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "quantity-value"
  }, selectedQuantity === "more" ? customQuantity || "—" : selectedQuantity), " ", "unidades"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "quantity-select",
    className: "quantity-select",
    "aria-label": "Select quantity",
    value: selectedQuantity === "more" ? "more" : selectedQuantity,
    onChange: handleQuantityChange,
    disabled: product.stock === 0
  }, Array.from({
    length: Math.min(product.stock, 6)
  }, function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: i + 1,
      value: i + 1
    }, i + 1, " unidad", i + 1 > 1 ? "es" : "");
  }), product.stock > 6 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "more"
  }, "M\xE1s de 6")), selectedQuantity === "more" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "custom-quantity"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "custom-quantity-input"
  }, "Cantidad:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "number",
    id: "custom-quantity-input",
    className: "custom-quantity-input",
    min: "7",
    max: product.stock,
    value: customQuantity,
    onChange: function onChange(e) {
      return setCustomQuantity(e.target.value);
    },
    placeholder: "7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "apply-button",
    onClick: handleCustomQuantityApply,
    disabled: !customQuantity || isNaN(customQuantity) || customQuantity < 7 || customQuantity > product.stock
  }, "Aplicar")), product.stock > 10 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "stock-info"
  }, "(+", product.stock, " disponibles)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .N_, {
    to: "/cart",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return addToCart(product);
    },
    className: "buy-now-button",
    disabled: product.stock === 0
  }, "Comprar ahora"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return addToCart(product);
    },
    className: "add-cart-details-button",
    disabled: product.stock === 0
  }, "Agregar al carrito"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Caracter\xEDsticas principales"), "Marca ", product.brand.name, "Nombre ", product.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Descripci\xF3n"), product.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-4"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetalleProductos);

/***/ }),

/***/ 8247:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false
    };
    return _this;
  }
  _inherits(ErrorBoundary, _Component);
  return _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can log the error to an error reporting service
      console.error("Error caught in boundary:", error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // Fallback UI
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Something went wrong. Please try again later.");
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render shows the fallback UI.
      return {
        hasError: true
      };
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ 8908:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4976);
/* harmony import */ var _img_bolaca_sin_borde_peque_a_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3607);



var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "footer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-section categories"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Categor\xEDas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N_, {
    to: "/productos?category=Cartas Didacticas",
    style: {
      textDecoration: 'none'
    }
  }, "Cartas Did\xE1cticas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N_, {
    to: "/productos?category=Test",
    style: {
      textDecoration: 'none'
    }
  }, "Juegos de Mesa")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N_, {
    to: "/productos?category=Libros Moviles",
    style: {
      textDecoration: 'none'
    }
  }, "Libros M\xF3viles")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_bolaca_sin_borde_peque_a_jpg__WEBPACK_IMPORTED_MODULE_1__ // Replace with your logo URL
    ,
    alt: "Bolaca"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-section contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Contactate con nosotros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "bolaca ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-brands fa-facebook"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "@bolacachile ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-brands fa-instagram"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "+56 9 3240 8221 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-solid fa-phone"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "bolacachile@gmail.com ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "class": "fa-solid fa-envelope"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Developed by SunlightDev"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ })

}]);