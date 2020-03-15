webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Stats = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var url = _ref.url;

  var _useFetch = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useFetch.stats,
      loading = _useFetch.loading,
      error = _useFetch.error; //console.log("Stats component loading", stats, loading, error);


  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Loading Stats...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "API Error => ", error.toString());
  if (stats.error) return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "No data found. API error => ", stats.error.message);
  var items = [{
    header: "Coronavirus Cases",
    description: "".concat(Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(stats.confirmed.value)),
    color: "grey",
    meta: ""
  }, {
    header: "Deaths",
    color: "red",
    description: "".concat(Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(stats.deaths.value)),
    meta: ""
  }, {
    header: "Recovered",
    color: "green",
    description: "".concat(Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(stats.recovered.value)),
    meta: ""
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
    itemsPerRow: 3,
    items: items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ })

})
//# sourceMappingURL=index.js.f982f88e7607ffdb53a7.hot-update.js.map