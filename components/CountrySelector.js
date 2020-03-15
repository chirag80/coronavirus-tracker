import useFetch from "../utils/useFetch";
import { Dropdown, Grid, Segment, Label } from "semantic-ui-react";

const CountrySelector = ({ onChange }) => {
  const { stats: countries, error, loading } = useFetch(
    "https://covid19.mathdro.id/api/countries"
  );

  if (loading) return <p>Countries Loading...</p>;

  if (error) return <p>Error loading countries..</p>;

  // change value with countries.iso3[code] if iso3 code required to be passed to API
  let countryOptions = Object.entries(countries.countries).map(
    ([name, code]) => {
      return { key: name, value: code, text: name };
    }
  );

  countryOptions = [
    { key: "world", value: "world", text: "World" },
    ...countryOptions
  ];

  return (
    <>
      {/* <Grid columns='equal' stackable='true'>
        <Grid.Column>
          <Label as='label' basic color='blue' size='big'>
            Select Country
          </Label>
        </Grid.Column>
        <Grid.Column width={13}> */}
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
        defaultValue='world'
        onChange={(e, data) => {
          // console.log("countries=>", data.value, countries.iso3[data.value]);
          onChange(data.value, countries.iso3[data.value]);
        }}
      />
      {/* </Grid.Column>
      </Grid> */}
    </>
  );
};

export default CountrySelector;
