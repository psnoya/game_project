import React, { Component } from "react";
import { Button, Grid, Segment, Message } from "semantic-ui-react";

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
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "CONGRATULATIONS! You won!";
    } else {
      return "You have Lost! What a shame! ";
    }
  }
  render() {
    
    return (

      <Segment>
        <Grid columns={1} relaxed="very">
          <Grid.Column width={2} floated="centered">
            <Button
              data-cy="paper-button"
              // id="paper"
              onCLick={(e) => this.onCLick(e)}
              icon="file outline"
              color="green"
              size="massive"
            />
            Paper
            <Button
              data-cy="rock-button"
              // id="rock"
              onCLick={(e) => this.onCLick(e)}
              icon="cube"
              color="yellow"
              size="massive"
            />
            Rock
            <Button
              data-cy="scissors-button"
              // id="scissors"
              onCLick={(e) => this.onCLick(e)}
              icon="cut"
              color="purple"
              size="massive"
            />
            Scissors
          </Grid.Column>
        </Grid>
        <Message data-cy='results'>
        <Message.Header 
        >
          {this.results.results}
        </Message.Header>
        </Message>
      </Segment>
    );
  }
}
export default Game;
