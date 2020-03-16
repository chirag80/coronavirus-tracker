import CountrySelector from "../components/CountrySelector";
import Stats from "../components/Stats";
import { useState, useMemo } from "react";
import { Container } from "semantic-ui-react";
import { Grid, Segment, Responsive } from "semantic-ui-react";
import Chart from "../components/Chart";
import StateStats from "../components/StateStats";

const Index = () => {
  const [url, setUrl] = useState("https://covid19.mathdro.id/api");

  const [selectedCountry, setSelected] = useState("world");

  const memoStatsComponent = useMemo(() => <Stats url={url} />, [url]);

  const memoStateStats = useMemo(
    () => <StateStats country={selectedCountry} />,
    [selectedCountry]
  );

  const onChange = (country, iso3) => {
    //console.log("country=>", country, "iso3=>", iso3);

    //this is to load state dropdown
    setSelected(iso3);

    if (country === "world") {
      setUrl("https://covid19.mathdro.id/api");
    } else {
      //this is to load statistics of selected country. country is iso2 code
      setUrl(`https://covid19.mathdro.id/api/countries/${country}`);
    }
  };

  return (
    <Container>
      <Grid stackable={true} stretched={true}>
        <Grid.Row stretched>
          <Grid.Column>
            <Responsive as={Segment}>
              <Chart />
            </Responsive>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Responsive as={Segment}>
              <CountrySelector onChange={onChange} />
              <br />
              {memoStatsComponent}
            </Responsive>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Responsive as={Segment}>{memoStateStats}</Responsive>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Index;
