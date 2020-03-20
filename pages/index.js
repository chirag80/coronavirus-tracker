import CountrySelector from "../components/CountrySelector";
import Stats from "../components/Stats";
import { useState, useMemo } from "react";
import { Container } from "semantic-ui-react";
import { Grid, Segment, Responsive, Button } from "semantic-ui-react";
import Chart from "../components/Chart";
import StateStats from "../components/StateStats";
import BarChart from "../components/BarChart";

const Index = () => {
  const [url, setUrl] = useState("https://covid19.mathdro.id/api");

  const [selectedCountry, setSelected] = useState({ iso2: "", iso3: "" });

  const [quickLinkState, setQuickLink] = useState(undefined);

  const memoStatsComponent = useMemo(() => <Stats url={url} />, [url]);

  const memoStateStats = useMemo(
    () => (
      <StateStats iso3={selectedCountry.iso3} iso2={selectedCountry.iso3} />
    ),
    [selectedCountry]
  );

  const onChange = (iso2, iso3) => {
    //this is to load state dropdown for StateStats
    setSelected({ iso2, iso3 });

    if (iso2 === "world") {
      setUrl("https://covid19.mathdro.id/api");
    } else {
      //this is to load statistics of selected country. country is iso2 code
      setUrl(`https://covid19.mathdro.id/api/countries/${iso2}`);
    }
  };

  const memoBarChartComp = useMemo(
    () => <BarChart selectedState={quickLinkState} />,
    [quickLinkState]
  );

  const handleBtnClick = (provinceState, iso2, countryName) => {
    setQuickLink({ iso2, provinceState, countryName });
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
        <Grid.Row stretched>
          <Grid.Column>
            <Responsive as={Segment}>
              <Button.Group>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(data.children, "US", "USA");
                  }}
                  color='blue'
                >
                  New Jersey
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(data.children, "US", "USA");
                  }}
                  color='blue'
                >
                  New York
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(data.children, "US", "USA");
                  }}
                  color='blue'
                >
                  California
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(data.children, "US", "USA");
                  }}
                  color='blue'
                >
                  Washington
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(data.children, "US", "USA");
                  }}
                  color='blue'
                >
                  Massachusetts
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(undefined, "IN", "India");
                  }}
                  color='blue'
                >
                  India
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(undefined, "IT", "Italy");
                  }}
                  color='blue'
                >
                  Italy
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(undefined, "IR", "Iran");
                  }}
                  color='blue'
                >
                  Iran
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick(undefined, "KR", "Korea, South");
                  }}
                  color='blue'
                >
                  South Korea
                </Button>
                <Button
                  basic
                  size='mini'
                  onClick={(e, data) => {
                    handleBtnClick("France", "FR", "France");
                  }}
                  color='blue'
                >
                  France
                </Button>
              </Button.Group>
              {quickLinkState && memoBarChartComp}
            </Responsive>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Index;
