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
              icon="file outline"
              color="green"
              size="massive"
            ></Button>

            <Button
              data-cy="rock-button"
              icon="cube"
              color="yellow"
              size="massive"
            ></Button>

            <Button
              data-cy="scissors-button"
              icon="cut"
              color="purple"
              size="massive"
            ></Button>
          </Grid.Column>

          <Grid.Column width={2} floated="centered">
            <Button
              data-cy="paper-button"
              icon="file outline"
              color="green"
              size="massive"
            ></Button>

            <Button
              data-cy="rock-button"
              icon="cube"
              color="yellow"
              size="massive"
            ></Button>

            <Button
              data-cy="scissors-button"
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
