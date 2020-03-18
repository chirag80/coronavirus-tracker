import CountrySelector from "../components/CountrySelector";
import Stats from "../components/Stats";
import { useState, useMemo } from "react";
import { Container } from "semantic-ui-react";
import { Grid, Segment, Responsive } from "semantic-ui-react";
import Chart from "../components/Chart";
import StateStats from "../components/StateStats";

const Index = () => {
  const [url, setUrl] = useState("https://covid19.mathdro.id/api");

  const [selectedCountry, setSelected] = useState({ iso2: "", iso3: "" });

  const memoStatsComponent = useMemo(() => <Stats url={url} />, [url]);

  const memoStateStats = useMemo(
    () => (
      <StateStats iso3={selectedCountry.iso3} iso2={selectedCountry.iso3} />
    ),
    [selectedCountry]
  );

  const onChange = (iso2, iso3) => {
    //console.log("iso2=>", iso2, "iso3=>", iso3);

    //this is to load state dropdown for StateStats
    setSelected({ iso2, iso3 });

    if (iso2 === "world") {
      setUrl("https://covid19.mathdro.id/api");
    } else {
      //this is to load statistics of selected country. country is iso2 code
      setUrl(`https://covid19.mathdro.id/api/countries/${iso2}`);
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
