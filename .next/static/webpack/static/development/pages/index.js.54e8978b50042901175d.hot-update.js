webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/BarChart.js":
/*!********************************!*\
  !*** ./components/BarChart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/chartUtils */ "./utils/chartUtils.js");

var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\BarChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var BarChart = function BarChart(_ref) {
  var selectedState = _ref.selectedState;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      locations = _useState[0],
      setLocations = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      chartData = _useState2[0],
      setChartData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      chartOptinos = _useState3[0],
      setChartOptions = _useState3[1];

  var getData = function getData() {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://coronavirus-tracker-api.herokuapp.com/confirmed"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

          case 5:
            data = _context.sent;
            console.log("useEffect bar chart", data.locations);
            setLocations(data.locations);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!locations) {
      setChartData(Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__["getBarChartData"])(locations, selectedState));
      setChartOptions(Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__["getBarChartOptions"])());
    }
  }, [selectedState, locations]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    data: chartData,
    options: chartOptinos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ })

})
//# sourceMappingURL=index.js.54e8978b50042901175d.hot-update.js.map