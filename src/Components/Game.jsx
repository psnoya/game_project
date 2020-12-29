import React, { Component } from "react";
import { Button, Grid, Segment, Message} from "semantic-ui-react";

const choices = ["paper", "rock", "scissors"];

class Game extends Component {
  state = {
    userChoice: "",
    computerChoice: "",
    results: "",
  };
  onCLick(e) {
    const userChoice = e.target.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const results = this.getResults(userChoice, computerChoice);
    this.setState({
      userChoice: userChoice,
      computerChoice: computerChoice,
      results: results,
    });
  }
  getResults(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "DRAW!";
    }
    if (
      (userChoice === "paper-button" && computerChoice === "rock-button") ||
      (userChoice === "rock-button" && computerChoice === "scissors-button") ||
      (userChoice === "scissors-button" && computerChoice === "paper-button")
    ) {
      return "CONGRATULATIONS! You won!";
    } else {
      return "You have Lost! What a shame!";
    }
  }
  render() {
    
    return (

      <Segment>
        <Grid columns={1} relaxed="very">
          <Grid.Column width={2} floated="centered">
            <Button
              data-cy="paper-button"
              onCLick={(e) => this.onCLick(e)}
              icon="file outline"
              color="green"
              size="massive"
            />
            Paper
            <Button
              data-cy="rock-button"
              onCLick={(e) => this.onCLick(e)}
              icon="cube"
              color="yellow"
              size="massive"
            />
            Rock
            <Button
              data-cy="scissors-button"
              onCLick={(e) => this.onCLick(e)}
              icon="cut"
              color="purple"
              size="massive"
            />
            Scissors
          </Grid.Column>
          
    
        </Grid>
        <Message data-cy="result">
        <Message.Header >
          {this.state.results}
        </Message.Header>
        </Message>
      </Segment>
      
    );
  }
}
export default Game;
