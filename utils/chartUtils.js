const getChartDate = (chartType, apiData) => {
  //console.log("Api data", apiData.slice(-10));
  let sliced = apiData.slice(-40);

  return {
    labels: sliced.map(it => it.reportDateString),
    datasets: [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ]
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
        label: function(tooltipItem, data) {
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
      text: "Coronavirs Cases - Overall Stats"
    }
  };
};

const xAxes = [
  {
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
  }
];

const yAxes = [
  {
    scaleLabel: {
      display: true,
      labelString: "Number of cases (in thousands)"
    },
    ticks: {
      beginAtZero: true,
      userCallback: function(value, index, values) {
        return value.toLocaleString(); // this is all we need
      }
    }
  }
];
export { getChartDate, getChartOptions };
