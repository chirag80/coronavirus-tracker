import React from "react";
import useFetch from "../utils/useFetch";
import { Line } from "react-chartjs-2";
import { getChartDate, getChartOptions } from "../utils/chartUtils";

const Chart = () => {
  const { stats, loading, error } = useFetch(
    "https://covid19.mathdro.id/api/daily"
  );

  //console.log("Chart component loading", stats, loading, error);

  if (loading) return <p>Loading Chart...</p>;

  if (error) return <p>Chart API Error => {error.toString()}</p>;

  if (stats.error)
    return <h3>No data found. Chart API error => {stats.error.message}</h3>;

  let chartData = getChartDate("line", stats);
  let chartOptions = getChartOptions("line");
  return (
    <div>
      <Line data={chartData} options={chartOptions} height={130} />
    </div>
  );
};

export default Chart;
