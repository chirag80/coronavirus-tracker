import CountrySelector from "../components/CountrySelector";
import Stats from "../components/Stats";
import { useState, useMemo } from "react";
import { Container } from "semantic-ui-react";
import { Grid, Segment } from "semantic-ui-react";
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

  const onChange = country => {
    setSelected(country);

    if (country === "world") {
      setUrl("https://covid19.mathdro.id/api");
    } else {
      setUrl(`https://covid19.mathdro.id/api/countries/${country}`);
    }
  };

  return (
    <Container>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Chart />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <CountrySelector onChange={onChange} />
              <br />
              {memoStatsComponent}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>{memoStateStats}</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Index;
