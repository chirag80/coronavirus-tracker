webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart.js");
/* harmony import */ var _components_StateStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StateStats */ "./components/StateStats.js");
/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BarChart */ "./components/BarChart.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("https://covid19.mathdro.id/api"),
      url = _useState[0],
      setUrl = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    iso2: "",
    iso3: ""
  }),
      selectedCountry = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      quickLinkState = _useState3[0],
      setQuickLink = _useState3[1];

  var memoStatsComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }, [url]);
  var memoStateStats = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_components_StateStats__WEBPACK_IMPORTED_MODULE_5__["default"], {
      iso3: selectedCountry.iso3,
      iso2: selectedCountry.iso3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }, [selectedCountry]);

  var onChange = function onChange(iso2, iso3) {
    //this is to load state dropdown for StateStats
    setSelected({
      iso2: iso2,
      iso3: iso3
    });

    if (iso2 === "world") {
      setUrl("https://covid19.mathdro.id/api");
    } else {
      //this is to load statistics of selected country. country is iso2 code
      setUrl("https://covid19.mathdro.id/api/countries/".concat(iso2));
    }
  };

  var memoBarChartComp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_components_BarChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selectedState: quickLinkState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    });
  }, [quickLinkState]);

  var handleBtnClick = function handleBtnClick(provinceState, iso2, countryName) {
    setQuickLink({
      iso2: iso2,
      provinceState: provinceState,
      countryName: countryName
    });
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    stackable: true,
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), memoStatsComponent))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, memoStateStats))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "New Jersey"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "New York"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "California"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Washington"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Massachusetts"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(undefined, "IN", "India");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "India"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(undefined, "IT", "Italy");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Italy"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(undefined, "IR", "Iran");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Iran"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick(undefined, "KR", "Korea, South");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "South Korea"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: function onClick(e, data) {
      handleBtnClick("France", "FR", "France");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "France"), quickLinkState && memoBarChartComp)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9ddd36d0d39788302f49.hot-update.js.map