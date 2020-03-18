import React from "react";
import useFetch from "../utils/useFetch";
import { Line } from "react-chartjs-2";
import { getChartData, getChartOptions } from "../utils/chartUtils";

const Chart = () => {
  const { stats, loading, error } = useFetch(
    "https://covid19.mathdro.id/api/daily"
  );

  //console.log("Chart component loading", stats, loading, error);

  if (loading) return <p>Loading Chart...</p>;

  if (error) return <p>Chart API Error => {error.toString()}</p>;

  if (stats.error)
    return <h3>No data found. Chart API error => {stats.error.message}</h3>;

  let chartData = getChartData("line", stats);
  let chartOptions = getChartOptions("line");
  return (
    <div id='chartDiv' style={{ minHeight: "450px" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
