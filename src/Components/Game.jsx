import React, { Component } from "react";
import { Button, Grid, Segment, Message } from "semantic-ui-react";

const choices = ["paper", "rock", "scissors"];

class Game extends Component {
  state = {
    userChoice: "",
    computerChoice: "",
    results: ""
  };
  onClick(e) {
    const userChoice = e.target.name
    const computerChoice = choices[Math.floor(Math.random() * 3)];
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
    else if (
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper")
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
            <div class="ui vertical buttons">
              <Button
                name ="paper"
                data-cy="paper-button"
                onClick={(e) => this.onClick(e)}

                color="green"
                size="massive"
              >
                
                Paper
              </Button>
              <Button
                name="rock"
                data-cy="rock-button"
                onClick={(e) => this.onClick(e)}
                color="yellow"
                size="massive"
              >
                Rock
              </Button>

              <Button
                name="scissors"
                data-cy="scissors-button"
                onClick={(e) => this.onClick(e)}
                color="purple"
                size="massive"
              >
                
                Scissors
              </Button>
            </div>
          </Grid.Column>
        </Grid>
        <Message data-cy="results" class="ui message" >
          <Message.Header>{this.state.results}</Message.Header>
        </Message>
      </Segment>
    );
  }
}
export default Game;
