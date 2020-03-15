import React, { useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { Card, Dropdown } from "semantic-ui-react";
import { numberWithCommas } from "../utils/format";

const StateStats = ({ country }) => {
  //console.log("state stats =>", country);
  if (country === "world") {
    return <h3>Select country above to see state wise data</h3>;
  }

  const [selectedState, setSelectedState] = useState(undefined);

  useEffect(() => {
    setSelectedState(undefined);
  }, [country]);

  const { stats: states, loading, error } = useFetch(
    `https://covid19.mathdro.id/api/countries/${country}/confirmed`
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

  let stateOptions = states.map(({ provinceState, countryRegion }, index) => ({
    key: provinceState || countryRegion,
    value: provinceState || countryRegion,
    text: provinceState || countryRegion
  }));

  const onChange = selectedValue => {
    let selected = states.find(state => state.provinceState === selectedValue);
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
      <br />
      {selectedState && (
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
      )}
    </>
  );
};

export default StateStats;
