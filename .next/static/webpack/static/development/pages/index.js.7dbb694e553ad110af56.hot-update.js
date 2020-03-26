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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var CountrySelector = function CountrySelector(_ref) {
  var _onChange = _ref.onChange;

  var _useFetch = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])("https://covid19.mathdro.id/api/countries"),
      countries = _useFetch.stats,
      error = _useFetch.error,
      loading = _useFetch.loading;

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Countries Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Error loading countries.."); // change value with countries.iso3[code] if iso3 code required to be passed to API

  console.log("country selector", countries);
  var countryOptions = countries.countries.map(function (country) {
    console.log("country obj", country);
    return {
      key: country.name,
      value: country.iso2,
      text: country.name
    };
  });
  countryOptions = [{
    key: "world",
    value: "world",
    text: "World"
  }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(countryOptions));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    placeholder: "Select Country",
    fluid: true,
    search: true,
    selection: true,
    options: countryOptions,
    defaultValue: "world",
    onChange: function onChange(e, data) {
      // console.log("countries=>", data.value, countries.iso3[data.value]);
      _onChange(data.value, countries.iso3[data.value]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CountrySelector);

/***/ })

})
//# sourceMappingURL=index.js.7dbb694e553ad110af56.hot-update.js.map