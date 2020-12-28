import React from 'react'
import { Segment, List  } from "semantic-ui-react"


const Rules = () => {
  return (

<Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header>Rule .1</List.Header>
          Rock beats Scissors
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Rule .2</List.Header>
          Paper beats Rock
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Rule .3</List.Header>
          Scissors beats paper
        </List.Content>
      </List.Item>
    </List>
  </Segment>

  )}

export default Rules