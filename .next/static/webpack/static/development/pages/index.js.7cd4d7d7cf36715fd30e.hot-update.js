webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/chartUtils */ "./utils/chartUtils.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\Chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Chart = function Chart() {
  var _useFetch = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])("https://covid19.mathdro.id/api/daily"),
      stats = _useFetch.stats,
      loading = _useFetch.loading,
      error = _useFetch.error; //console.log("Chart component loading", stats, loading, error);


  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Loading Chart...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Chart API Error => ", error.toString());
  if (stats.error) return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "No data found. Chart API error => ", stats.error.message);
  var chartData = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__["getChartDate"])("line", stats);
  var chartOptions = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__["getChartOptions"])("line");
  return __jsx("div", {
    id: "chartDiv",
    style: {
      height: "600px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
    data: chartData,
    options: chartOptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ })

})
//# sourceMappingURL=index.js.7cd4d7d7cf36715fd30e.hot-update.js.map