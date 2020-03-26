webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var getBarChartData = function getBarChartData(apiData, selectedState) {
  //console.log("Locations in chart utils", apiData, selectedState);
  var list = apiData.filter(function (x) {
    return x.country_code === selectedState.iso2;
  }); //console.log("List ", list);
  //const tmpList = list.filter(x => x.province === selectedState.provinceState);
  //console.log("tmp List", tmpList);

  var record = list.length > 1 ? list.find(function (x) {
    return x.province === selectedState.provinceState;
  }) : list[0]; //console.log("record", record);

  var sorted = Object.keys(record.history).sort(function (a, b) {
    return new Date(a) - new Date(b);
  });
  var labels = sorted.slice(-15);
  return {
    labels: labels,
    datasets: [{
      label: "Daily cases",
      backgroundColor: "#ff8c00",
      borderColor: "grey",
      borderWidth: 1,
      hoverBackgroundColor: "#ffa500",
      hoverBorderColor: "#ffa500",
      data: labels.map(function (label) {
        return record.history[label];
      })
    }]
  };
};

var getBarChartOptions = function getBarChartOptions(selectedState) {
  return {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      mode: "index",
      callbacks: {
        label: function label(tooltipItem, data) {
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

var getChartData = function getChartData(chartType, apiData) {
  var _ref, _ref2;

  var sliced = apiData.slice(-40);
  console.log("Api data", sliced);
  return {
    labels: sliced.map(function (it) {
      return it.reportDate;
    }),
    datasets: [(_ref = {
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
      pointBorderWidth: 1
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "pointHoverRadius", 5), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "borderColor", "red"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "data", sliced.map(function (it) {
      return it.totalConfirmed;
    })), _ref), {
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
      data: sliced.map(function (it) {
        return it.mainlandChina;
      })
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
      data: sliced.map(function (it) {
        return it.otherLocations;
      })
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
      data: sliced.map(function (it) {
        return it.totalRecovered;
      })
    }, (_ref2 = {
      label: "Delta Confirmed",
      fill: false,
      lineTension: 0,
      borderWidth: 2,
      pointBackgroundColor: "yellow",
      pointBorderColor: "yellow",
      pointHoverRadius: 5,
      pointRadius: 2,
      backgroundColor: "yellow",
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointBorderWidth: 1
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "pointHoverRadius", 5), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "borderColor", "yellow"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "data", sliced.map(function (it) {
      return it.deltaConfirmed;
    })), _ref2)]
  };
};

var getChartOptions = function getChartOptions(type) {
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
        label: function label(tooltipItem, data) {
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
      xAxes: xAxes,
      yAxes: yAxes
    },
    title: {
      display: "Display",
      fontSize: 20,
      text: "Coronavirs Cases - Overall Stats"
    }
  };
};

var xAxes = [{
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
var yAxes = [{
  scaleLabel: {
    display: true,
    labelString: "Number of cases",
    fontSize: 15
  },
  ticks: {
    beginAtZero: true,
    userCallback: function userCallback(value, index, values) {
      return value.toLocaleString(); // this is all we need
    }
  }
}];
var xAxesBar = [{
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
var yAxesBar = [{
  scaleLabel: {
    display: true,
    labelString: "Number of cases",
    fontSize: 15
  },
  ticks: {
    beginAtZero: true,
    userCallback: function userCallback(value, index, values) {
      return value.toLocaleString(); //  this is all we need
    }
  }
}];


/***/ })

})
//# sourceMappingURL=index.js.6cd5423be65cc4e3f097.hot-update.js.map