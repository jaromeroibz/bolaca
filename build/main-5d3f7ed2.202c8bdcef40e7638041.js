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
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9123);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var ContactForm = function ContactForm() {
  var _useGoogleReCaptcha = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_1__/* .useGoogleReCaptcha */ ._Y)(),
    executeRecaptcha = _useGoogleReCaptcha.executeRecaptcha;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!executeRecaptcha) {
      console.warn("reCAPTCHA is not ready yet.");
    }
  }, [executeRecaptcha]); // Runs when `executeRecaptcha` becomes available

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var token, response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (executeRecaptcha) {
              _context.next = 4;
              break;
            }
            console.error("ReCAPTCHA is not ready yet. Try again later.");
            return _context.abrupt("return");
          case 4:
            _context.prev = 4;
            _context.next = 7;
            return executeRecaptcha("contact_form");
          case 7:
            token = _context.sent;
            _context.next = 10;
            return fetch("".concat("https://api.bolaca.cl", "/submit"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(_objectSpread(_objectSpread({}, formData), {}, {
                "g-recaptcha-response": token
              }))
            });
          case 10:
            response = _context.sent;
            _context.next = 13;
            return response.json();
          case 13:
            result = _context.sent;
            alert(result.message || result.error);
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](4);
            console.log("Error submitting form:", _context.t0);
          case 20:
            setError("");
            alert("Mensaje enviado exitosamente.");
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 17]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
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
  }, message.length, " / 300")), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
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