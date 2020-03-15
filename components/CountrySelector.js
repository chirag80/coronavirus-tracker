import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import { Dropdown } from "semantic-ui-react";

const CountrySelector = ({ onChange }) => {
  const { stats: countries, error, loading } = useFetch(
    "https://covid19.mathdro.id/api/countries"
  );

  if (loading) return <p>Countries Loading...</p>;

  if (error) return <p>Error loading countries..</p>;

  let countryOptions = Object.entries(countries.countries).map(
    ([name, code]) => {
      return { key: name, value: countries.iso3[code], text: name };
    }
  );

  countryOptions = [
    { key: "world", value: "world", text: "World" },
    ...countryOptions
  ];

  return (
    <>
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
        defaultValue='world'
        onChange={(e, data) => {
          onChange(data.value);
        }}
      />
    </>
  );
};

export default CountrySelector;
