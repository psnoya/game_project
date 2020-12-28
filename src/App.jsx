import React from "react";
import { Divider, Grid, Segment, Statistic } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Game from "./Components/Game.jsx";
import "./index.css";
import Results from "./Components/Results.jsx"
import Rules from "./Components/Rules.jsx"

const App = () =>  {
      return (
      <>
        <Header />
        <Rules />

      
          <Game />
          {/* <Grid columns={2}>
            <Grid.Column width={2} floated="centered">
              // <Game />
              <Results />
            </Grid.Column>

            <Grid.Column
              floated="centered"
              width={2}>
              {/* <P2 /> */}
              {/* <Results />
            </Grid.Column>
          </Grid>

          <Divider vertical>VS</Divider> */} 

        <Footer />
      </>
    );
  }


export default App;
