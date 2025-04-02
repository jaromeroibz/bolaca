"use strict";
(self["webpackChunkreact_hello_webapp"] = self["webpackChunkreact_hello_webapp"] || []).push([[906],{

/***/ 4531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7767);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4976);
/* harmony import */ var _img_Carousel1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7009);
/* harmony import */ var _img_Carousel2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6426);
/* harmony import */ var _img_Carousel3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var _img_1_CURSIVA_small_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2723);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4673);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3801);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4589);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4157);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }










var Slider = react_slick__WEBPACK_IMPORTED_MODULE_8__["default"] || react_slick__WEBPACK_IMPORTED_MODULE_8__;

var SliderWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Slider, _extends({}, props, {
    ref: ref
  }));
});
var LandingPage = function LandingPage() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_appContext_js__WEBPACK_IMPORTED_MODULE_1__/* .AppContext */ .BR);

  // Destructure with default values
  var _ref = contextValue || {},
    _ref$store = _ref.store,
    store = _ref$store === void 0 ? {
      products: [],
      categories: []
    } : _ref$store,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? {} : _ref$actions;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .Zp)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!(typeof (actions === null || actions === void 0 ? void 0 : actions.getProducts) === 'function' && typeof (actions === null || actions === void 0 ? void 0 : actions.getCategories) === 'function')) {
                _context.next = 6;
                break;
              }
              _context.next = 4;
              return Promise.all([actions.getProducts(), actions.getCategories()]);
            case 4:
              _context.next = 7;
              break;
            case 6:
              console.warn("Required actions not available");
            case 7:
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error("Error in fetchData:", _context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }));
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchData();
  }, [actions]);

  // Safe access to products
  var result = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return Array.isArray(store === null || store === void 0 ? void 0 : store.products) ? store.products.filter(function (item) {
      return (item === null || item === void 0 ? void 0 : item.is_destacado) === true;
    }) : [];
  }, [store === null || store === void 0 ? void 0 : store.products]);
  function filterProducts(item) {
    actions.getProductByCategory(item);
    navigate('/productos');
  }
  var sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var next = function next() {
    sliderRef.current.slickNext();
  };
  var previous = function previous() {
    sliderRef.current.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "landing-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hero-carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "carouselExampleIndicators",
    className: "carousel slide",
    "data-bs-ride": "carousel",
    "data-bs-interval": "3000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "carousel-indicators"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    "data-bs-target": "#carouselExampleIndicators",
    "data-bs-slide-to": "0",
    className: "active",
    "aria-current": "true",
    "aria-label": "Slide 1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    "data-bs-target": "#carouselExampleIndicators",
    "data-bs-slide-to": "1",
    "aria-label": "Slide 2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    "data-bs-target": "#carouselExampleIndicators",
    "data-bs-slide-to": "2",
    "aria-label": "Slide 3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "carousel-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "carousel-item active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .Link */ .N_, {
    to: "/productos/1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_Carousel1_png__WEBPACK_IMPORTED_MODULE_2__,
    className: "d-block w-100",
    alt: "Carousel1"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .Link */ .N_, {
    to: "/productos/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_Carousel2_png__WEBPACK_IMPORTED_MODULE_3__,
    className: "d-block w-100",
    alt: "Carousel2"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .Link */ .N_, {
    to: "/productos/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_Carousel3_png__WEBPACK_IMPORTED_MODULE_4__,
    className: "d-block w-100",
    alt: "Carousel3"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": "#carouselExampleIndicators",
    "data-bs-slide": "prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "visually-hidden"
  }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "carousel-control-next",
    type: "button",
    "data-bs-target": "#carouselExampleIndicators",
    "data-bs-slide": "next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "visually-hidden"
  }, "Next")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "Titulos text-center"
  }, "Destacados"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .Link */ .N_, {
    to: "/productos",
    style: {
      textDecoration: 'none'
    }
  }, "Ir a todos los productos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "leftarrow",
    onClick: previous
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_sl__WEBPACK_IMPORTED_MODULE_11__/* .SlArrowLeft */ .SnO, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container",
    style: {
      maxWidth: 850,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderWrapper, _extends({}, settings, {
    ref: sliderRef,
    vertical: false
  }), result.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .Link */ .N_, {
      to: "/detalleproductos/".concat(item.id),
      key: item.id,
      style: {
        textDecoration: 'none',
        color: 'inherit'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "py-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card",
      style: {
        width: 256,
        height: 350,
        margin: '0 auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "card-img-top",
      src: item.image,
      alt: "Card image cap",
      style: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        objectPosition: 'center'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "card-title"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "card-text"
    }, "$", item.price)))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "rightarrow",
    onClick: next
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_sl__WEBPACK_IMPORTED_MODULE_11__/* .SlArrowRight */ .dH8, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "categorias py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "Titulos text-center py-4"
  }, "Descubre nuestras categor\xEDas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container d-flex justify-content-center align-items-center",
    style: {
      flexWrap: "wrap"
    }
  }, store.categories.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-inline text-center m-3",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .Link */ .N_, {
      to: '/productos/' + item.id,
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: item.image,
      style: {
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px"
      },
      alt: "category image"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.category_name)));
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);

/***/ }),

/***/ 1250:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var LogIn = function LogIn() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_appContext_js__WEBPACK_IMPORTED_MODULE_1__/* .AppContext */ .BR),
    store = _useContext.store,
    actions = _useContext.actions;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    errorMessage = _useState6[0],
    setErrorMessage = _useState6[1];
  function sendData(_x) {
    return _sendData.apply(this, arguments);
  }
  function _sendData() {
    _sendData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var redirectUrl;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            // loginAdmin now returns the redirect URL on success
            _context.next = 3;
            return actions.loginAdmin(email, password);
          case 3:
            redirectUrl = _context.sent;
            if (redirectUrl && store.auth === true) {
              window.location.href = redirectUrl;
            } else {
              setErrorMessage('Incorrect credentials. Please try again.');
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _sendData.apply(this, arguments);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container",
    style: {
      paddingTop: "200px",
      maxWidth: "400px"
    }
  }, store.auth === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AdminRedirect, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Welcome back!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: sendData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "position-relative mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "my-2",
    htmlFor: "exampleInputEmail1"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: "form-control my-2",
    id: "exampleInputEmail1",
    placeholder: "Enter email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "position-relative mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "exampleInputPassword1"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "form-control my-2",
    id: "exampleInputPassword1",
    placeholder: "Password"
  }), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
    className: "text-danger"
  }, errorMessage))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "position-relative mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "buy-now-button"
  }, "Submit")))))));
};
var AdminRedirect = function AdminRedirect() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Clean up the "next" query parameter if present
    var url = new URL(window.location.href);
    if (url.searchParams.has("next")) {
      url.searchParams["delete"]("next");
      window.history.replaceState(null, "", url.pathname);
    }
    // Then redirect to the admin page
    var adminUrl = "https://api.bolaca.cl";
    window.location.href = "".concat(adminUrl, "/admin");
  }, []);
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogIn);

/***/ }),

/***/ 3589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);

var LogOut = function LogOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("auth");
  window.location.href = '/login';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Cargando...");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogOut);

/***/ }),

/***/ 5809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7767);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4976);
/* harmony import */ var _img_bolaca_sin_borde_peque_a_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3607);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3398);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Navbar = function Navbar() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_appContext_js__WEBPACK_IMPORTED_MODULE_2__/* .AppContext */ .BR),
    store = _useContext.store,
    actions = _useContext.actions;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isScrolled = _useState4[0],
    setIsScrolled = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isExpanded = _useState6[0],
    setIsExpanded = _useState6[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .Zp)();

  // Handle scroll effect for navbar
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle search functionality
  var handleSearch = function handleSearch(e) {
    e.preventDefault();
    actions.filterProducts(searchQuery);
    navigate("/searchbarresults");

    // Close mobile menu after search on small screens
    var offcanvas = document.getElementById('offcanvasNavbar');
    if (offcanvas && window.innerWidth < 992) {
      var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  };

  // Toggle mobile menu
  var toggleMenu = function toggleMenu() {
    setIsExpanded(!isExpanded);
  };

  // Close mobile menu when a link is clicked
  var closeMenu = function closeMenu() {
    if (window.innerWidth < 992) {
      var offcanvas = document.getElementById('offcanvasNavbar');
      if (offcanvas) {
        var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        if (bsOffcanvas) bsOffcanvas.hide();
      }
      setIsExpanded(false);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "navbar navbar-expand-lg fixed-top ".concat(isScrolled ? 'navbar-scrolled' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid px-2 px-md-4 px-lg-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    className: "navbar-brand d-flex align-items-center",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _img_bolaca_sin_borde_peque_a_jpg__WEBPACK_IMPORTED_MODULE_1__,
    className: "img-fluid",
    alt: "Logo",
    style: {
      maxWidth: isScrolled ? "120px" : "150px",
      transition: "max-width 0.3s ease"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex align-items-center order-lg-last me-2 me-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/cart",
    className: "nav-cart-link me-3 me-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-cart-shopping"
  }), store.cart.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "cart-badge"
  }, store.cart.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "navbar-toggler shadow-none border-0",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#offcanvasNavbar",
    "aria-controls": "offcanvasNavbar",
    "aria-label": "Toggle navigation",
    onClick: toggleMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "navbar-toggler-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar offcanvas offcanvas-start",
    tabIndex: "-1",
    id: "offcanvasNavbar",
    "aria-labelledby": "offcanvasNavbarLabel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "offcanvas-header border-bottom d-lg-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "offcanvas-title",
    id: "offcanvasNavbarLabel"
  }, "BOLACA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-close shadow-none",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close",
    onClick: toggleMenu
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "offcanvas-body align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "navbar-nav justify-content-center align-items-center flex-grow-1 pe-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item px-1 px-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/",
    className: "nav-link",
    onClick: closeMenu
  }, "HOME")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item px-1 px-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/productos",
    className: "nav-link",
    onClick: closeMenu
  }, "PRODUCTOS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item px-1 px-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/creadores",
    className: "nav-link",
    onClick: closeMenu
  }, "CREADORES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item px-1 px-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/contacto",
    className: "nav-link",
    onClick: closeMenu
  }, "CONTACTO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item px-1 px-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/login",
    className: "nav-link",
    onClick: closeMenu
  }, "LOGIN"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "d-flex mt-3 my-lg-0 search-form",
    role: "search",
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-control shadow-none search-input",
    type: "search",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    },
    "aria-label": "Search",
    placeholder: "NOMBRE, CATEGOR\xCDA O MARCA"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn search-btn",
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-magnifying-glass"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-lg-none mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/cart",
    className: "mobile-cart-link d-flex align-items-center",
    onClick: closeMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fa-solid fa-cart-shopping me-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Carrito ", store.cart.length > 0 ? "(".concat(store.cart.length, ")") : ""))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ 1750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7767);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4976);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var Productos = function Productos() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_appContext_js__WEBPACK_IMPORTED_MODULE_1__/* .AppContext */ .BR),
    store = _useContext.store,
    actions = _useContext.actions;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .zy)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    displayedProducts = _useState4[0],
    setDisplayedProducts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    hasMore = _useState8[0],
    setHasMore = _useState8[1];
  var productsPerPage = 6;
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showFilters = _useState10[0],
    setShowFilters = _useState10[1]; // For mobile filter toggle

  // Scroll to top when component mounts
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [location.pathname]); // This will trigger when the route changes

  // Create a ref for the loading element
  var observer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var loadingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Filter states combined into a single state object
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      type: null,
      // 'category', 'age', 'price', or 'brand'
      value: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    activeFilter = _useState12[0],
    setActiveFilter = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Retrieve query params on each change
    var searchParams = new URLSearchParams(location.search);
    var category = searchParams.get("category");
    actions.getBrands();
    actions.getCategories();
    if (category) {
      setActiveFilter({
        type: 'category',
        value: category
      });
      actions.getProductByCategory(category);
    } else {
      setActiveFilter({
        type: null,
        value: null
      });
      actions.getProducts();
    }

    // Reset pagination when filters change
    setPage(1);
    setHasMore(true);
  }, [location.search]);

  // Update displayed products when store.products changes or filters change
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (filteredProducts.length > 0) {
      setDisplayedProducts(filteredProducts.slice(0, page * productsPerPage));
      setHasMore(filteredProducts.length > page * productsPerPage);
    } else {
      setDisplayedProducts([]);
      setHasMore(false);
    }
  }, [store.products, activeFilter, page]);
  var loadMoreProducts = function loadMoreProducts() {
    if (loading || !hasMore) return;
    setLoading(true);
    // Simulate a delay to show loading state (remove in production)
    setTimeout(function () {
      setPage(function (prevPage) {
        return prevPage + 1;
      });
      setLoading(false);
    }, 500);
  };

  // Filter functions
  var filterProducts = function filterProducts(products) {
    if (!activeFilter.type || !activeFilter.value) return products;
    switch (activeFilter.type) {
      case 'age':
        var _activeFilter$value = _slicedToArray(activeFilter.value, 2),
          minAge = _activeFilter$value[0],
          maxAge = _activeFilter$value[1];
        return products.filter(function (item) {
          return item.min_age >= minAge && item.max_age <= maxAge;
        });
      case 'price':
        var _activeFilter$value2 = _slicedToArray(activeFilter.value, 2),
          minPrice = _activeFilter$value2[0],
          maxPrice = _activeFilter$value2[1];
        return products.filter(function (item) {
          return item.price >= minPrice && item.price <= maxPrice;
        });
      case 'brand':
        return products.filter(function (item) {
          return item.brand.name.toLowerCase() === activeFilter.value.toLowerCase();
        });
      case 'category':
        return products.filter(function (item) {
          return item.category_name.toLowerCase() === activeFilter.value.toLowerCase();
        });
      default:
        return products;
    }
  };

  // Apply the active filter to products
  var filteredProducts = filterProducts(store.products);

  // Filter option data
  var ageRanges = [{
    label: "0-2 años",
    range: [0, 2]
  }, {
    label: "3-6 años",
    range: [3, 6]
  }, {
    label: "7-10 años",
    range: [7, 10]
  }];
  var priceRanges = [{
    label: "$0 - $10000",
    range: [0, 10000]
  }, {
    label: "$10001 - $20000",
    range: [10001, 20000]
  }, {
    label: "$20001 - $25000",
    range: [20001, 25000]
  }];

  // Helper function to check if a filter is active
  var isFilterActive = function isFilterActive(type, value) {
    return activeFilter.type === type && (Array.isArray(activeFilter.value) && Array.isArray(value) ? activeFilter.value[0] === value[0] && activeFilter.value[1] === value[1] : activeFilter.value === value);
  };

  // Handler for filter clicks
  var handleFilterClick = function handleFilterClick(type, value) {
    var apiCallFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    // If clicking the same filter that's already active, clear it
    if (isFilterActive(type, value)) {
      setActiveFilter({
        type: null,
        value: null
      });
      actions.getProducts(); // Reset to all products
    } else {
      // Set new active filter and clear others
      setActiveFilter({
        type: type,
        value: value
      });

      // If there's an API call associated with this filter, make it
      if (apiCallFn) {
        apiCallFn();
      }
    }

    // Reset pagination
    setPage(1);

    // On mobile, close the filter sidebar after selection
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  // Render the filter sidebar
  var renderFilterSidebar = function renderFilterSidebar() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: window.innerWidth < 768 ? "filter-sidebar-mobile" + (showFilters ? " show" : "") : "col-md-4 col-lg-3 px-4",
      style: {
        minWidth: "200px"
      }
    }, window.innerWidth < 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "close-filters-btn",
      onClick: function onClick() {
        return setShowFilters(false);
      },
      "aria-label": "Close filters"
    }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "mb-3"
    }, "Filtros"), activeFilter.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex align-items-center justify-content-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
      className: "text-muted"
    }, "Filtro activo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-sm btn-outline-secondary filter-clear-btn",
      onClick: function onClick() {
        setActiveFilter({
          type: null,
          value: null
        });
        actions.getProducts();
        setPage(1);
      }
    }, "Limpiar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mt-2"
    }, activeFilter.type === 'price' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "active-filter-badge"
    }, "Precio: $", activeFilter.value[0], " - $", activeFilter.value[1]), activeFilter.type === 'brand' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "active-filter-badge"
    }, "Marca: ", activeFilter.value), activeFilter.type === 'age' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "active-filter-badge"
    }, "Edad: ", activeFilter.value[0], "-", activeFilter.value[1], " a\xF1os"), activeFilter.type === 'category' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "active-filter-badge"
    }, "Categor\xEDa: ", activeFilter.value)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "mb-2"
    }, "Precio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ps-2"
    }, priceRanges.map(function (range, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index,
        onClick: function onClick() {
          return handleFilterClick('price', range.range);
        },
        className: "filter-option ".concat(isFilterActive('price', range.range) ? 'active' : ''),
        style: {
          whiteSpace: 'normal',
          width: '100%'
        }
      }, range.label);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
      className: "my-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "mb-2"
    }, "Marca"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ps-2"
    }, store.brands.map(function (brand, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index,
        onClick: function onClick() {
          return handleFilterClick('brand', brand.name, function () {
            return actions.getProductsByBrands(brand.id);
          });
        },
        className: "filter-option ".concat(isFilterActive('brand', brand.name) ? 'active' : ''),
        style: {
          whiteSpace: 'normal',
          width: '100%'
        }
      }, brand.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
      className: "my-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "mb-2"
    }, "Edad m\xEDnima recomendada"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ps-2"
    }, ageRanges.map(function (range, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index,
        onClick: function onClick() {
          return handleFilterClick('age', range.range);
        },
        className: "filter-option ".concat(isFilterActive('age', range.range) ? 'active' : ''),
        style: {
          whiteSpace: 'normal',
          width: '100%'
        }
      }, range.label);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
      className: "my-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "mb-2"
    }, "Categor\xEDa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ps-2"
    }, store.categories.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: index,
        onClick: function onClick() {
          return handleFilterClick('category', item.category_name, function () {
            return actions.getProductByCategory(item.id);
          });
        },
        className: "filter-option ".concat(isFilterActive('category', item.category_name) ? 'active' : ''),
        style: {
          whiteSpace: 'normal',
          width: '100%'
        }
      }, item.category_name);
    }))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "productos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between align-items-center mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Productos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-md-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-sm btn-outline-dark",
    onClick: function onClick() {
      return setShowFilters(true);
    }
  }, "Filtros"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between align-items-center mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "m-0"
  }, filteredProducts.length, " resultados"), activeFilter.type && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-sm btn-outline-secondary",
    onClick: function onClick() {
      setActiveFilter({
        type: null,
        value: null
      });
      actions.getProducts();
      setPage(1);
    }
  }, "Limpiar filtros"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-none d-md-block col-md-4 col-lg-3"
  }, renderFilterSidebar()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12 col-md-8 col-lg-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-grid"
  }, store.products.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Cargando productos...")) : filteredProducts.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "No hay productos que coincidan con el filtro seleccionado."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-outline-primary mt-3",
    onClick: function onClick() {
      setActiveFilter({
        type: null,
        value: null
      });
      actions.getProducts();
    }
  }, "Ver todos los productos")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, displayedProducts.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card product-card",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "card-img-top product-card-image",
      loading: "lazy",
      src: item.image,
      alt: item.name
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-body product-card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "card-title product-card-title"
    }, item.name), item.stock === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "text-danger fw-bold mb-2"
    }, "Sin Stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "card-text fw-bold mb-3"
    }, "$", item.price.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex flex-column flex-sm-row gap-2 product-card-actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .N_, {
      to: "/detalleproductos/".concat(item.id),
      style: {
        textDecoration: 'none'
      },
      className: "flex-grow-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "see-more-button w-100"
    }, "Ver M\xE1s")), item.stock >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return actions.addToCart(item);
      },
      className: "add-cart-button flex-grow-1"
    }, "Agregar"))));
  }), hasMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: loadingRef,
    className: "loading-indicator"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spinner-border spinner-border-sm text-primary",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "visually-hidden"
  }, "Cargando...")) : ""))))))), window.innerWidth < 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "filter-overlay".concat(showFilters ? " show" : ""),
    onClick: function onClick() {
      return setShowFilters(false);
    }
  }), renderFilterSidebar(), !showFilters && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "filter-toggle-btn",
    onClick: function onClick() {
      return setShowFilters(true);
    },
    "aria-label": "Show filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Productos);

/***/ }),

/***/ 5348:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
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


var ScrollToTop = /*#__PURE__*/function (_React$Component) {
  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);
    return _callSuper(this, ScrollToTop, arguments);
  }
  _inherits(ScrollToTop, _React$Component);
  return _createClass(ScrollToTop, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
ScrollToTop.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.any
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);

/***/ }),

/***/ 2254:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SearchBarResults */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4976);



var SearchBarResults = function SearchBarResults() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_appContext_js__WEBPACK_IMPORTED_MODULE_1__/* .AppContext */ .BR),
    store = _useContext.store,
    actions = _useContext.actions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "search-bar-results"
  }, store.filteredProducts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, store.filteredProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card",
      style: {
        width: 284,
        height: 477
      },
      key: product.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "card-img-top",
      src: "https://picsum.photos/200/200",
      alt: "Card image cap"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "card-title"
    }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "card-text"
    }, "$", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .N_, {
      to: "/detalleproductos/".concat(product.id),
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "see-more-button d-inline"
    }, "Ver M\xE1s"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "px-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return actions.addToCart(product);
      },
      className: "add-cart-button"
    }, "Agregar al carrito")))));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No hay productos que coincidan con tu b\xFAsqueda")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBarResults);

/***/ }),

/***/ 2593:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4976);
/* harmony import */ var _mercadopago_sdk_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9938);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6064);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var ShoppingCart = function ShoppingCart() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_appContext_js__WEBPACK_IMPORTED_MODULE_1__/* .AppContext */ .BR),
    store = _useContext.store,
    actions = _useContext.actions;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    preferenceId = _useState2[0],
    setPreferenceId = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentOrder = _useState4[0],
    setCurrentOrder = _useState4[1];
  var itemsPrice = store.cart.reduce(function (a, c) {
    return a + c.qty * c.price;
  }, 0);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "",
      email: "",
      phone: "",
      street: "",
      streetNumber: "",
      city: "",
      province: "",
      postalCode: ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    customerDetails = _useState6[0],
    setCustomerDetails = _useState6[1];
  (0,_mercadopago_sdk_react__WEBPACK_IMPORTED_MODULE_2__/* .initMercadoPago */ .Lz)("APP_USR-d706c38b-4f61-41c6-92e2-d3ae06f6f9c9", {
    locale: "es-CL"
  });
  var createPreference = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var items, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            items = store.cart.map(function (item) {
              return {
                title: item.name,
                quantity: parseInt(item.qty),
                unit_price: parseFloat(item.price),
                product_image: item.image,
                description: item.description || item.name,
                id: item.id || String(Math.random())
              };
            });
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.post("".concat("https://api.bolaca.cl", "/create_preference"), {
              items: items,
              customer: currentOrder
            }, {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer ".concat("APP_USR-3037645566784563-101819-363d0474dbc30739f59058bb0e2b0884-475805926")
              }
            });
          case 4:
            response = _context.sent;
            if (!(response.data && response.data.id)) {
              _context.next = 8;
              break;
            }
            setPreferenceId(response.data.id);
            return _context.abrupt("return", response.data.id);
          case 8:
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error("Error creating preference:", _context.t0);
            alert("Error creating payment preference. Please try again.");
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function createPreference() {
      return _ref.apply(this, arguments);
    };
  }();

  // Add MercadoPago Wallet customization
  var renderCheckoutButton = function renderCheckoutButton(preferenceId) {
    if (preferenceId) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mercadopago_sdk_react__WEBPACK_IMPORTED_MODULE_2__/* .Wallet */ .uW, {
        initialization: {
          preferenceId: preferenceId
        },
        customization: {
          texts: {
            valueProp: 'smart_option'
          },
          visual: {
            buttonBackground: 'black',
            borderRadius: '6px'
          }
        }
      });
    }
  };

  // Handle form input changes
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      id = _e$target.id,
      value = _e$target.value;
    setCustomerDetails(_objectSpread(_objectSpread({}, customerDetails), {}, _defineProperty({}, id, value)));
  };

  // Handle form submission
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
      alert("Por favor complete todos los campos requeridos");
      return;
    }
    try {
      // Add customer to the array of customers in the store
      // If addCustomerDetails doesn't exist yet, use setCustomerDetails as fallback
      if (actions.addCustomerDetails) {
        var newOrder = actions.addCustomerDetails(customerDetails);
        setCurrentOrder(newOrder);
      } else {
        actions.setCustomerDetails(customerDetails);
        setCurrentOrder(_objectSpread(_objectSpread({}, customerDetails), {}, {
          orderId: "order-".concat(Date.now()),
          timestamp: new Date().toISOString(),
          items: store.cart
        }));
      }

      // Proceed with payment
      handleBuy();
    } catch (error) {
      console.error("Error saving customer details:", error);

      // Fallback: Store in localStorage if context update fails
      var orderData = _objectSpread(_objectSpread({}, customerDetails), {}, {
        orderId: "order-".concat(Date.now()),
        timestamp: new Date().toISOString(),
        items: store.cart
      });

      // Try to append to existing orders
      try {
        var existingOrders = JSON.parse(localStorage.getItem('customerOrders') || '[]');
        existingOrders.push(orderData);
        localStorage.setItem('customerOrders', JSON.stringify(existingOrders));
      } catch (e) {
        localStorage.setItem('currentOrder', JSON.stringify(orderData));
      }
      setCurrentOrder(orderData);
      handleBuy();
    }
  };
  var handleBuy = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var id;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return createPreference();
          case 2:
            id = _context2.sent;
            if (id) {
              setPreferenceId(id);
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleBuy() {
      return _ref2.apply(this, arguments);
    };
  }();
  var shippingPrice = 4000; // cambiar a shippingCost si se utiliza la promo
  // const shippingPrice = itemsPrice > 20000 ? 0 : shippingCost;
  var totalPrice = itemsPrice + shippingPrice;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_, {
    to: "/productos",
    style: {
      textDecoration: "none"
    },
    className: "mb-3 d-inline-block"
  }, "Volver al listado"), store.cart.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Tu carrito est\xE1 vac\xEDo") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Tu carrito"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-5 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "card-title text-center mb-3"
  }, "Resumen compra"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Productos: (", store.cart.length, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "$", itemsPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Costo de env\xEDo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Env\xEDo por pagar Starken")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex justify-content-between mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fw-bold"
  }, "Total:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "fw-bold"
  }, "$", totalPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "card-title text-center mt-4 mb-3"
  }, "Datos de contacto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "name",
    className: "form-label fw-bold"
  }, "Nombre completo*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    id: "name",
    value: customerDetails.name,
    onChange: handleInputChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "email",
    className: "form-label fw-bold"
  }, "Email*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    className: "form-control",
    id: "email",
    value: customerDetails.email,
    onChange: handleInputChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "phone",
    className: "form-label fw-bold"
  }, "Tel\xE9fono*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "tel",
    className: "form-control",
    id: "phone",
    value: customerDetails.phone,
    onChange: handleInputChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "street",
    className: "form-label fw-bold"
  }, "Calle*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    id: "street",
    value: customerDetails.street,
    onChange: handleInputChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "streetNumber",
    className: "form-label fw-bold"
  }, "N\xFAmero*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    id: "streetNumber",
    value: customerDetails.streetNumber,
    onChange: handleInputChange,
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "city",
    className: "form-label fw-bold"
  }, "Ciudad*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    id: "city",
    value: customerDetails.city,
    onChange: handleInputChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "province",
    className: "form-label fw-bold"
  }, "Comuna*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    id: "province",
    value: customerDetails.province,
    onChange: handleInputChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "postalCode",
    className: "form-label fw-bold"
  }, "C\xF3digo Postal*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "form-control",
    id: "postalCode",
    value: customerDetails.postalCode,
    onChange: handleInputChange,
    required: true
  }))), !preferenceId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-dark w-100 mt-3"
  }, "Ir a pagar") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-3"
  }, renderCheckoutButton(preferenceId)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-7 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, store.cart.map(function (item, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mb-3",
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "img-fluid me-3",
      src: item.image,
      alt: item.name,
      style: {
        width: 90,
        height: 90,
        objectFit: 'contain'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "flex-grow-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "mb-1"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-sm btn-outline-secondary",
      onClick: function onClick() {
        return actions.removeFromCart(item);
      }
    }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "px-2"
    }, item.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-sm btn-outline-secondary",
      onClick: function onClick() {
        return actions.addToCart(item);
      }
    }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fw-bold"
    }, "$", item.price * item.qty)))), idx < store.cart.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
      className: "my-3"
    }));
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCart);

/***/ }),

/***/ 188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4976);


var Success = function Success() {
  // En tu página de success
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Verificar que el pago fue exitoso
    var status = new URLSearchParams(window.location.search).get('status');
    if (status === 'approved') {
      localStorage.removeItem('cart');
      alert('¡Compra realizada con éxito!');
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container",
    style: {
      paddingTop: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "mx-auto"
  }, "\xA1Compra realizada exitosamente!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .N_, {
    style: {
      textDecoration: 'None',
      color: 'black'
    },
    to: "/productos/999"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mx-auto"
  }, "Sigue comprando"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Success);

/***/ })

}]);