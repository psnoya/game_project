import React from "react"
import { Button, Grid, Header } from "semantic-ui-react"

const P2 = () => {
  return (
    <>
      <Header
        textAlign="center"
        color="pink">

        P2
    </Header>
      <Grid.Column
        width={2}
        floated='centered'
      >
      </Grid.Column>
      <Button
        data-cy="paper-button"
        icon='file outline'
        color='green'
        size='massive'>
      </Button>

      <Button
        data-cy="rock-button"
        icon='cube'
        color="yellow"
        size='massive'>
      </Button>

      <Button
        data-cy="scissors-button"
        icon='cut'
        color="purple"
        size='massive'>
      </Button>
    </>
  )
}
export default P2