webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/chartUtils.js":
/*!*****************************!*\
  !*** ./utils/chartUtils.js ***!
  \*****************************/
/*! exports provided: getChartDate, getChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartDate", function() { return getChartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartOptions", function() { return getChartOptions; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var getChartDate = function getChartDate(chartType, apiData) {
  var _ref;

  //console.log("Api data", apiData.slice(-10));
  var sliced = apiData.slice(-40);
  return {
    labels: sliced.map(function (it) {
      return it.reportDateString;
    }),
    datasets: [(_ref = {
      label: "Total",
      fill: false,
      lineTension: 10,
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
      lineTension: 0.1,
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
      pointRadius: 3,
      pointHitRadius: 10,
      data: sliced.map(function (it) {
        return it.mainlandChina;
      })
    }, {
      label: "Other Countries",
      fill: false,
      lineTension: 0.1,
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
      pointRadius: 3,
      pointHitRadius: 10,
      data: sliced.map(function (it) {
        return it.otherLocations;
      })
    }, {
      label: "Recovered",
      fill: false,
      lineTension: 0.1,
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
      pointRadius: 3,
      pointHitRadius: 10,
      data: sliced.map(function (it) {
        return it.totalRecovered;
      })
    }]
  };
};

var getChartOptions = function getChartOptions(type) {
  return {
    responsive: true,
    height: 400,
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
    labelString: "Date (Last 40 days)"
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
    labelString: "Number of cases (in thousands)"
  },
  ticks: {
    beginAtZero: true,
    userCallback: function userCallback(value, index, values) {
      return value.toLocaleString(); // this is all we need
    }
  }
}];


/***/ })

})
//# sourceMappingURL=index.js.3028027f508da0b26ff7.hot-update.js.map