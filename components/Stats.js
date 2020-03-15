import React from "react";
import useFetch from "../utils/useFetch";
import { Card } from "semantic-ui-react";
import { numberWithCommas } from "../utils/format";

const Stats = React.memo(({ url }) => {
  const { stats, loading, error } = useFetch(url);
  //console.log("Stats component loading", stats, loading, error);

  if (loading) return <p>Loading Stats...</p>;

  if (error) return <p>API Error => {error.toString()}</p>;

  if (stats.error)
    return <h3>No data found. API error => {stats.error.message}</h3>;

  const items = [
    {
      header: "Total",
      description: `${numberWithCommas(stats.confirmed.value)}`,
      color: "grey",
      meta: "",
      width: "10"
    },
    {
      header: "Recovered",
      color: "green",
      description: `${numberWithCommas(stats.recovered.value)}`,
      meta: ""
    },
    {
      header: "Deaths",
      color: "red",
      description: `${numberWithCommas(stats.deaths.value)}`,
      meta: ""
    }
  ];

  return (
    <>
      <Card.Group stackable={true} itemsPerRow={3} items={items} />
    </>
  );
});

export default Stats;
