import React from "react";
import { Divider, Grid, Segment, Statistic } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import P1 from "./Components/P1.jsx";
import "./index.css";
import P2 from "./Components/P2.jsx";
import Results from "./Components/Results"


class App extends React.Component {
  render() {
    return (
      <>
        <Header />

        <Segment>
          <Grid columns={2}>
            <Grid.Column width={2} floated="centered">
              <P1 />
              <Statistic
                color='blue'
                inverted
                data-cy="results">
                <Statistic.Value>
                  0
                  </Statistic.Value>
                <Statistic.Label>
                  inverted
                  </Statistic.Label>

              </Statistic>
            </Grid.Column>

            <Grid.Column
              floated="centered"
              width={2}>
              <P2 />
              <Statistic
                color='blue'
                inverted
                data-cy="results">
                <Statistic.Value>
                  0
                  </Statistic.Value>
                <Statistic.Label>
                  Results
                  </Statistic.Label>

              </Statistic>
            </Grid.Column>
          </Grid>

          <Divider vertical>VS</Divider>

        </Segment>
        <Footer />
      </>
    );
  }
}

export default App;
