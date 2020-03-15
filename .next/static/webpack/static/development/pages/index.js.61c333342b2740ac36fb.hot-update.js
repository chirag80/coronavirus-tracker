webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/StateStats.js":
/*!**********************************!*\
  !*** ./components/StateStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\StateStats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var StateStats = function StateStats(_ref) {
  var country = _ref.country;

  if (country === "world") {
    return __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Select country above to see state wise data");
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      selectedState = _useState[0],
      setSelectedState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSelectedState(undefined);
  }, [country]);

  var _useFetch = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])("https://covid19.mathdro.id/api/countries/".concat(country, "/confirmed")),
      states = _useFetch.stats,
      loading = _useFetch.loading,
      error = _useFetch.error;

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Loading States of selected country...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Retrieving states API Error => ", error.toString());
  if (states.error) return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "No data found. Retrieving states API error => ", stats.error.message);
  console.log("State wise info", states);
  var stateOptions = states.map(function (_ref2, index) {
    var provinceState = _ref2.provinceState,
        countryRegion = _ref2.countryRegion;
    return {
      key: provinceState || countryRegion,
      value: provinceState || countryRegion,
      text: provinceState || countryRegion
    };
  });

  var _onChange = function onChange(selectedValue) {
    var selected = states.find(function (state) {
      return state.provinceState === selectedValue;
    });
    console.log("Selected state info", selected);

    if (!selected) {
      selected = states[0];
    }

    setSelectedState(selected);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    placeholder: "Select State",
    fluid: true,
    search: true,
    selection: true,
    selectOnBlur: false,
    options: stateOptions,
    onChange: function onChange(e, data) {
      _onChange(data.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), selectedState && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Image, {
    floated: "right",
    size: "mini",
    src: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Steve Sanders"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Friends of Elliot"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Steve wants to add you to the group", " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "best friends"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
    extra: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "ui two buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(Button, {
    basic: true,
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Approve"), __jsx(Button, {
    basic: true,
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Decline"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (StateStats);

/***/ })

})
//# sourceMappingURL=index.js.61c333342b2740ac36fb.hot-update.js.map