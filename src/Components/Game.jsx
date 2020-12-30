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
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "CONGRATULATIONS! You won!"
    } else {
      return "You have Lost! What a shame!"
    }
  }
  render() {
    
    return (

      <Segment>
        <Grid columns={1} relaxed="very">
          <Grid.Column width={2} floated="centered">
            <div class="ui vertical buttons">
            <Button
            class="ui button"
              data-cy="paper-button"
              onCLick={(e) => this.onCLick(e)}
              color="green"
              size="massive"
              
            > Paper </Button>
            <Button
            class="ui button"
              data-cy="rock-button"
              onCLick={(e) => this.onCLick(e)}
              color="yellow"
              size="massive"
            >Rock </Button>
            
            <Button
            class="ui button"
              data-cy="scissors-button"
              onCLick={(e) => this.onCLick(e)}
              color="purple"
              size="massive"
            > Scissors </Button>
            </div>
          </Grid.Column>
          
    
        </Grid>
        <Message data-cy="results">
        <Message.Header >
          {this.state.results}
        </Message.Header>
        </Message>
      </Segment>
      
    );
  }
}
export default Game;
