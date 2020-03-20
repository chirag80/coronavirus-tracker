module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BarChart.js":
/*!********************************!*\
  !*** ./components/BarChart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_chartUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/chartUtils */ "./utils/chartUtils.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\BarChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BarChart = ({
  selectedState
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: locations,
    1: setLocations
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: chartData,
    1: setChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: chartOptinos,
    1: setChartOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getData = async () => {
    let response = await fetch("https://coronavirus-tracker-api.herokuapp.com/confirmed");
    let data = await response.json(); //console.log("useEffect bar chart", data.locations);

    setLoading(false);
    setLocations(data.locations);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (Object.keys(locations).length > 0) {
      setChartData(Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_2__["getBarChartData"])(locations, selectedState));
      setChartOptions(Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_2__["getBarChartOptions"])(selectedState));
    }
  }, [selectedState, locations]);
  if (loading) return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " Loading Bar chart..");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    height: 125,
    data: chartData,
    options: chartOptinos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ }),

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/chartUtils */ "./utils/chartUtils.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\Chart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Chart = () => {
  const {
    stats,
    loading,
    error
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])("https://covid19.mathdro.id/api/daily"); //console.log("Chart component loading", stats, loading, error);

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Loading Chart...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Chart API Error => ", error.toString());
  if (stats.error) return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "No data found. Chart API error => ", stats.error.message);
  let chartData = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__["getChartData"])("line", stats);
  let chartOptions = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_3__["getChartOptions"])("line");
  return __jsx("div", {
    id: "chartDiv",
    style: {
      minHeight: "450px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
    data: chartData,
    options: chartOptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CountrySelector = ({
  onChange
}) => {
  const {
    stats: countries,
    error,
    loading
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])("https://covid19.mathdro.id/api/countries");
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Countries Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Error loading countries.."); // change value with countries.iso3[code] if iso3 code required to be passed to API

  let countryOptions = Object.entries(countries.countries).map(([name, code]) => {
    return {
      key: name,
      value: code,
      text: name
    };
  });
  countryOptions = [{
    key: "world",
    value: "world",
    text: "World"
  }, ...countryOptions];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    placeholder: "Select Country",
    fluid: true,
    search: true,
    selection: true,
    options: countryOptions,
    defaultValue: "world",
    onChange: (e, data) => {
      // console.log("countries=>", data.value, countries.iso3[data.value]);
      onChange(data.value, countries.iso3[data.value]);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CountrySelector);

/***/ }),

/***/ "./components/StateStats.js":
/*!**********************************!*\
  !*** ./components/StateStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarChart */ "./components/BarChart.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\StateStats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const StateStats = ({
  iso3,
  iso2
}) => {
  //console.log("state stats =>", country);
  if (iso3 === "") {
    return __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, "Select country in above dropdown to see state wise data");
  }

  const {
    0: selectedState,
    1: setSelectedState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const memoBarChartComp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_BarChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedState: selectedState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), [selectedState]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSelectedState(undefined);
  }, [iso3]);
  const {
    stats: states,
    loading,
    error
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://covid19.mathdro.id/api/countries/${iso3}/confirmed`);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Loading States of selected country...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Retrieving states API Error => ", error.toString());
  if (states.error) return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "No data found. Retrieving states API error => ", stats.error.message); //console.log("State wise info", states);

  let stateOptions = states.map(({
    provinceState,
    countryRegion
  }, index) => ({
    key: provinceState || countryRegion,
    value: provinceState || countryRegion,
    text: provinceState || countryRegion
  }));

  const onChange = selectedValue => {
    let selected = states.find(state => state.provinceState === selectedValue); // console.log("Selected state info", selected);

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
    onChange: (e, data) => {
      onChange(data.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), selectedState && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
    stackable: true,
    itemsPerRow: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    header: "Total",
    description: selectedState && Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(selectedState.confirmed),
    color: "grey",
    meta: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    header: "Active",
    description: selectedState && Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(selectedState.active),
    color: "blue",
    meta: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    header: "Recovered",
    description: selectedState && Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(selectedState.recovered),
    color: "green",
    meta: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    header: "Deaths",
    description: selectedState && Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(selectedState.deaths),
    color: "red",
    meta: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }))), selectedState && memoBarChartComp);
};

/* harmony default export */ __webpack_exports__["default"] = (StateStats);

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./utils/useFetch.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format */ "./utils/format.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\components\\Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Stats = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  url
}) => {
  //console.log("Stats=>", url);
  const {
    stats,
    loading,
    error
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url); //console.log("Stats component loading", stats, loading, error);

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Loading Stats...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "API Error => ", error.toString());
  if (stats.error) return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "No data found. API error => ", stats.error.message);
  const items = [{
    header: "Total",
    description: `${Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(stats.confirmed.value)}`,
    color: "grey",
    meta: "",
    width: "10"
  }, {
    header: "Recovered",
    color: "green",
    description: `${Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(stats.recovered.value)}`,
    meta: ""
  }, {
    header: "Deaths",
    color: "red",
    description: `${Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__["numberWithCommas"])(stats.deaths.value)}`,
    meta: ""
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Group, {
    stackable: true,
    itemsPerRow: 3,
    items: items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart.js");
/* harmony import */ var _components_StateStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StateStats */ "./components/StateStats.js");
/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BarChart */ "./components/BarChart.js");
var _jsxFileName = "C:\\Learning\\coronavirus-tracker\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Index = () => {
  const {
    0: url,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("https://covid19.mathdro.id/api");
  const {
    0: selectedCountry,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    iso2: "",
    iso3: ""
  });
  const {
    0: quickLinkState,
    1: setQuickLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const memoStatsComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), [url]);
  const memoStateStats = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_components_StateStats__WEBPACK_IMPORTED_MODULE_5__["default"], {
    iso3: selectedCountry.iso3,
    iso2: selectedCountry.iso3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), [selectedCountry]);

  const onChange = (iso2, iso3) => {
    //this is to load state dropdown for StateStats
    setSelected({
      iso2,
      iso3
    });

    if (iso2 === "world") {
      setUrl("https://covid19.mathdro.id/api");
    } else {
      //this is to load statistics of selected country. country is iso2 code
      setUrl(`https://covid19.mathdro.id/api/countries/${iso2}`);
    }
  };

  const memoBarChartComp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_components_BarChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selectedState: quickLinkState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), [quickLinkState]);

  const handleBtnClick = (provinceState, iso2, countryName) => {
    setQuickLink({
      iso2,
      provinceState,
      countryName
    });
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    stackable: true,
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), memoStatsComponent))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, memoStateStats))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Responsive"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "New Jersey"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "New York"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "California"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Washington"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(data.children, "US", "USA");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Massachusetts"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(undefined, "IN", "India");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "India"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(undefined, "IT", "Italy");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "Italy"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(undefined, "IR", "Iran");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "Iran"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    basic: true,
    size: "mini",
    onClick: (e, data) => {
      handleBtnClick(undefined, "KR", "Korea, South");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, "South Korea"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: "mini",
    basic: true,
    onClick: (e, data) => {
      handleBtnClick("France", "FR", "France");
    },
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "France"), quickLinkState && memoBarChartComp)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/chartUtils.js":
/*!*****************************!*\
  !*** ./utils/chartUtils.js ***!
  \*****************************/
/*! exports provided: getChartData, getChartOptions, getBarChartData, getBarChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartData", function() { return getChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartOptions", function() { return getChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarChartData", function() { return getBarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarChartOptions", function() { return getBarChartOptions; });
const getBarChartData = (apiData, selectedState) => {
  //console.log("Locations in chart utils", apiData, selectedState);
  const list = apiData.filter(x => x.country_code === selectedState.iso2); //console.log("List ", list);
  //const tmpList = list.filter(x => x.province === selectedState.provinceState);
  //console.log("tmp List", tmpList);

  const record = list.length > 1 ? list.find(x => x.province === selectedState.provinceState) : list[0]; //console.log("record", record);

  const sorted = Object.keys(record.history).sort((a, b) => new Date(a) - new Date(b));
  const labels = sorted.slice(-15);
  return {
    labels,
    datasets: [{
      label: "Daily cases",
      backgroundColor: "#ff8c00",
      borderColor: "grey",
      borderWidth: 1,
      hoverBackgroundColor: "#ffa500",
      hoverBorderColor: "#ffa500",
      data: labels.map(label => record.history[label])
    }]
  };
};

const getBarChartOptions = selectedState => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      mode: "index",
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }

          label += tooltipItem.yLabel.toLocaleString();
          return label;
        }
      }
    },
    scales: {
      xAxes: xAxesBar,
      yAxes: yAxesBar
    },
    title: {
      display: "Display",
      fontSize: 15,
      text: selectedState.provinceState ? "Total Cases in " + selectedState.provinceState : "Total Cases in " + selectedState.countryName
    }
  };
};

const getChartData = (chartType, apiData) => {
  //console.log("Api data", apiData.slice(-10));
  let sliced = apiData.slice(-40);
  return {
    labels: sliced.map(it => it.reportDateString),
    datasets: [{
      label: "Total",
      fill: false,
      lineTension: 0,
      borderWidth: 2,
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      pointHoverRadius: 5,
      pointRadius: 2,
      backgroundColor: "red",
      pointHoverBackgroundColor: "red",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      borderColor: "red",
      data: sliced.map(it => it.totalConfirmed)
    }, {
      label: "China",
      fill: false,
      lineTension: 0,
      borderWidth: 2,
      backgroundColor: "orange",
      borderColor: "orange",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "orange",
      pointBackgroundColor: "orange",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "orange",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: sliced.map(it => it.mainlandChina)
    }, {
      label: "Other Countries",
      fill: false,
      lineTension: 0,
      borderWidth: 2,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "blue",
      pointBackgroundColor: "blue",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: sliced.map(it => it.otherLocations)
    }, {
      label: "Recovered",
      fill: false,
      lineTension: 0,
      borderWidth: 2,
      backgroundColor: "green",
      borderColor: "green",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "green",
      pointBackgroundColor: "green",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "green",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: sliced.map(it => it.totalRecovered)
    }]
  };
};

const getChartOptions = type => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
        boxWidth: 8
      }
    },
    tooltips: {
      mode: "index",
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }

          label += tooltipItem.yLabel.toLocaleString();
          return label;
        }
      }
    },
    scales: {
      xAxes,
      yAxes
    },
    title: {
      display: "Display",
      fontSize: 20,
      text: "Coronavirs Cases - Overall Stats"
    }
  };
};

const xAxes = [{
  type: "time",
  distribution: "series",
  gridLines: {
    display: false
  },
  scaleLabel: {
    display: true,
    labelString: "Date (Last 40 days)",
    fontSize: 15
  },
  ticks: {
    major: {
      enabled: true,
      fontStyle: "bold"
    },
    source: "data",
    autoSkip: true,
    autoSkipPadding: 0,
    maxRotation: 50
  },
  time: {
    tooltipFormat: "MM/DD/YYYY",
    displayFormats: {
      month: "MMM DD"
    }
  }
}];
const yAxes = [{
  scaleLabel: {
    display: true,
    labelString: "Number of cases",
    fontSize: 15
  },
  ticks: {
    beginAtZero: true,
    userCallback: function (value, index, values) {
      return value.toLocaleString(); // this is all we need
    }
  }
}];
const xAxesBar = [{
  type: "time",
  offset: true,
  distribution: "series",
  gridLines: {
    display: false
  },
  scaleLabel: {
    display: true,
    labelString: "Date (Last 15 days)",
    fontSize: 15
  },
  ticks: {
    major: {
      enabled: true
    },
    source: "data",
    autoSkip: true,
    autoSkipPadding: 0,
    maxRotation: 50
  },
  time: {
    tooltipFormat: "MMM DD",
    displayFormats: {
      month: "MMM DD"
    }
  }
}];
const yAxesBar = [{
  scaleLabel: {
    display: true,
    labelString: "Number of cases",
    fontSize: 15
  },
  ticks: {
    beginAtZero: true,
    userCallback: function (value, index, values) {
      return value.toLocaleString(); // this is all we need
    }
  }
}];


/***/ }),

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: numberWithCommas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberWithCommas", function() { return numberWithCommas; });
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/***/ }),

/***/ "./utils/useFetch.js":
/*!***************************!*\
  !*** ./utils/useFetch.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (url => {
  const isCurrent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const {
    0: stats,
    1: setStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  const getStats = async () => {
    //console.log("UseFetch invoked:", url);
    let data;

    try {
      let response = await fetch(url);
      data = await response.json();
      if (isCurrent.current) setStats(data);
    } catch (err) {
      setError(err);
      setStats(null);
    }

    if (isCurrent.current) setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (url) getStats();
  }, [url, setStats]);
  return {
    stats,
    loading,
    error
  };
}); // export default function Example() {
//   const [data, dataSet] = useState(false);
//   async function fetchMyAPI() {
//     let response = await fetch("api/data");
//     response = await res.json();
//     dataSet(response);
//   }
//   useEffect(() => {
//     fetchMyAPI();
//   }, []);
//   return <div>{data}</div>;
// }

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Learning\coronavirus-tracker\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map