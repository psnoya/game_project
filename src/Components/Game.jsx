import React from "react";
import { Button, Grid, Header, Divider, Segment } from "semantic-ui-react";

const Game = () => {
  
  return (
    <>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column
            width={2}
            floated="centered"
          >
            <Button
              data-cy="paper-button"
              name="paper"
              icon="file outline"
              color="green"
              size="massive"
            ></Button>

            <Button
              data-cy="rock-button"
              name="rock"
              icon="cube"
              color="yellow"
              size="massive"
            ></Button>

            <Button
              data-cy="scissors-button"
              name="scissors"
              icon="cut"
              color="purple"
              size="massive"
            ></Button>
          </Grid.Column>

          <Grid.Column width={2} floated="centered">
            <Button
              icon="file outline"
              color="green"
              size="massive"
            ></Button>

            <Button
              icon="cube"
              color="yellow"
              size="massive"
            ></Button>

            <Button
              icon="cut"
              color="purple"
              size="massive"
            ></Button>
          </Grid.Column>
        </Grid>

        <Divider vertical>VS</Divider>
      </Segment>
    </>
  );
};
export default Game;
