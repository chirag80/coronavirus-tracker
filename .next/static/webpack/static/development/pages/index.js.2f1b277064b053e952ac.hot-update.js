webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\CountrySelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var CountrySelector = function CountrySelector(_ref) {
  var _onChange = _ref.onChange;

  var _useFetch = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_3__["default"])("https://covid19.mathdro.id/api/countries"),
      countries = _useFetch.stats,
      error = _useFetch.error,
      loading = _useFetch.loading;

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Countries Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Error loading countries..");
  var countryOptions = Object.entries(countries.countries).map(function (_ref2) {
    var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
        name = _ref3[0],
        code = _ref3[1];

    return {
      key: name,
      value: countries.iso3[code],
      text: name
    };
  });
  countryOptions = [{
    key: "world",
    value: "world",
    text: "World"
  }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(countryOptions));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Select Country"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    placeholder: "Select Country",
    fluid: true,
    search: true,
    selection: true,
    options: countryOptions,
    defaultValue: "world",
    onChange: function onChange(e, data) {
      _onChange(data.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CountrySelector);

/***/ })

})
//# sourceMappingURL=index.js.2f1b277064b053e952ac.hot-update.js.map