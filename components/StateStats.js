import React, { useState, useEffect, useMemo } from "react";
import useFetch from "../utils/useFetch";
import { Card, Dropdown } from "semantic-ui-react";
import { numberWithCommas } from "../utils/format";
import BarChart from "./BarChart";

const StateStats = ({ iso3, iso2 }) => {
  //console.log("state stats =>", country);
  if (iso3 === "") {
    return <h3>Select country in above dropdown to see state wise data</h3>;
  }

  const [selectedState, setSelectedState] = useState(undefined);

  const memoBarChartComp = useMemo(
    () => <BarChart selectedState={selectedState} />,
    [selectedState]
  );

  useEffect(() => {
    setSelectedState(undefined);
  }, [iso3]);

  let { stats: states, loading, error } = useFetch(
    `https://covid19.mathdro.id/api/countries/${iso3}/confirmed`
  );

  if (loading) return <p>Loading States of selected country...</p>;

  if (error) return <p>Retrieving states API Error => {error.toString()}</p>;

  if (states.error)
    return (
      <h3>
        No data found. Retrieving states API error => {stats.error.message}
      </h3>
    );

  //console.log("State wise info", states);
  states = states.filter(x => x.lastUpdate === states[0].lastUpdate);
  //console.log("State wise info 2", states);
  let stateOptions = states.map(
    ({ provinceState, countryRegion, combinedKey }, index) => ({
      key: combinedKey,
      value: combinedKey,
      text: combinedKey
    })
  );

  const onChange = selectedValue => {
    let selected = states.find(state => state.combinedKey === selectedValue);
    // console.log("Selected state info", selected);
    if (!selected) {
      selected = states[0];
    }
    setSelectedState(selected);
  };

  return (
    <>
      <Dropdown
        placeholder='Select State'
        fluid
        search
        selection
        selectOnBlur={false}
        options={stateOptions}
        onChange={(e, data) => {
          onChange(data.value);
        }}
      />
      {selectedState && (
        <>
          <br />
          <Card.Group stackable={true} itemsPerRow={4}>
            <Card
              header='Total'
              description={
                selectedState && numberWithCommas(selectedState.confirmed)
              }
              color='grey'
              meta=''
            />
            <Card
              header='Active'
              description={
                selectedState && numberWithCommas(selectedState.active)
              }
              color='blue'
              meta=''
            />
            <Card
              header='Recovered'
              description={
                selectedState && numberWithCommas(selectedState.recovered)
              }
              color='green'
              meta=''
            />
            <Card
              header='Deaths'
              description={
                selectedState && numberWithCommas(selectedState.deaths)
              }
              color='red'
              meta=''
            />
          </Card.Group>
        </>
      )}
      {selectedState && memoBarChartComp}
    </>
  );
};

export default StateStats;
