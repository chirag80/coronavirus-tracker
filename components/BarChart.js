import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { getBarChartData, getBarChartOptions } from "../utils/chartUtils";

const BarChart = ({ selectedState }) => {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState({});
  const [chartData, setChartData] = useState({});
  const [chartOptinos, setChartOptions] = useState({});

  const getData = async () => {
    let response = await fetch(
      "https://coronavirus-tracker-api.herokuapp.com/confirmed"
    );
    let data = await response.json();
    //console.log("useEffect bar chart", data.locations);
    setLoading(false);
    setLocations(data.locations);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (Object.keys(locations).length > 0) {
      setChartData(getBarChartData(locations, selectedState));
      setChartOptions(getBarChartOptions(selectedState));
    }
  }, [selectedState, locations]);

  if (loading) return <> Loading Bar chart..</>;
  return (
    <>
      <div>
        <Bar height={125} data={chartData} options={chartOptinos} />
      </div>
    </>
  );
};

export default BarChart;
