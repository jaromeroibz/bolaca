"use strict";
(self["webpackChunkreact_hello_webapp"] = self["webpackChunkreact_hello_webapp"] || []).push([[906],{

/***/ 4531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _store_appContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3398);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7767);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4976);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4673);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3801);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4589);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4157);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






var Slider = react_slick__WEBPACK_IMPORTED_MODULE_4__["default"] || react_slick__WEBPACK_IMPORTED_MODULE_4__;

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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .Zp)();
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N_, {
    to: "/productos?category=1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://res.cloudinary.com/dkfgpjg30/image/upload/v1744169782/Carousel1_d054rp.png",
    className: "d-block w-100",
    alt: "Carousel1"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N_, {
    to: "/productos?category=3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://res.cloudinary.com/dkfgpjg30/image/upload/v1744169782/Carousel2_j8j9dn.png",
    className: "d-block w-100",
    alt: "Carousel2"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N_, {
    to: "/productos?category=2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://res.cloudinary.com/dkfgpjg30/image/upload/v1744169782/Carousel3_wwi1ob.png",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N_, {
    to: "/productos",
    style: {
      textDecoration: 'none'
    }
  }, "Ir a todos los productos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "leftarrow",
    onClick: previous
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_sl__WEBPACK_IMPORTED_MODULE_7__/* .SlArrowLeft */ .SnO, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container",
    style: {
      maxWidth: 850,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderWrapper, _extends({}, settings, {
    ref: sliderRef,
    vertical: false
  }), result.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N_, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_sl__WEBPACK_IMPORTED_MODULE_7__/* .SlArrowRight */ .dH8, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .Link */ .N_, {
      to: "/productos?category=".concat(item.id),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "py-1"
    }, item.category_name)));
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6784);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6188);
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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showPassword = _useState8[0],
    setShowPassword = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];

  // Scroll to top when component mounts
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [location.pathname]); // This will trigger when the route changes
  function sendData(_x) {
    return _sendData.apply(this, arguments);
  }
  function _sendData() {
    _sendData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            setIsLoading(true);
            setErrorMessage('');

            // Add a small delay to show loading state
            setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var redirectUrl;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return actions.loginAdmin(email, password);
                  case 3:
                    redirectUrl = _context.sent;
                    if (redirectUrl && store.auth === true) {
                      window.location.href = redirectUrl;
                    } else {
                      setErrorMessage('Incorrect credentials. Please try again.');
                    }
                    _context.next = 11;
                    break;
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    setErrorMessage('An error occurred. Please try again.');
                    console.error(_context.t0);
                  case 11:
                    _context.prev = 11;
                    setIsLoading(false);
                    return _context.finish(11);
                  case 14:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 7, 11, 14]]);
            })), 600);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _sendData.apply(this, arguments);
  }
  var togglePasswordVisibility = function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "login-container"
  }, store.auth === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AdminRedirect, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "login-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "login-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "login-subtitle"
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "login-title"
  }, "Hola Bolaca!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: sendData,
    className: "login-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__/* .FontAwesomeIcon */ .g, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faEnvelope */ .y_8
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: "form-control",
    id: "email",
    placeholder: "Ingresa tu correo",
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "password-label-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "password"
  }, "Contrase\xF1a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "forgot-password"
  }, "Olvidaste tu contrase\xF1a?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__/* .FontAwesomeIcon */ .g, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faLock */ .DW4
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: showPassword ? "text" : "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "form-control",
    id: "password",
    placeholder: "Ingresa tu constrase\xF1a",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "password-toggle",
    onClick: togglePasswordVisibility,
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__/* .FontAwesomeIcon */ .g, {
    icon: showPassword ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faEyeSlash */ .k6j : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faEye */ .pS3
  }))), errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "error-message"
  }, errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group remember-me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "custom-checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    id: "remember"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "remember"
  }, "Recu\xE9rdame"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "login-button ".concat(isLoading ? 'loading' : ''),
    disabled: isLoading
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "spinner"
  }) : 'Sign In'))));
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

/***/ })

}]);