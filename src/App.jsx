import React from "react";
import './App.css';
//import "./index.css";
import { Button, Divider, Grid, Segment, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {
  
  render() {
   
    return ( 
      <div>
        <Header as='h2' icon>
    <Icon name='game' />
    Rock, Paper, Scissors!
    <Header.Subheader>
      Manage your account settings and set e-mail preferences.
    </Header.Subheader>
  </Header>
      
    <Segment>
    

    <Grid columns={2} 
          
          >
<Grid.Column 
 width={5}
 floated='left'
>
        <Button 
        icon='file outline'
        color='green'
        floated='left'
        size='massive'>
        </Button>

        <Button 
        icon='cube'
        color="yellow"
        floated='middle'
        size='massive'>
        </Button>

        <Button 
        icon='cut'
        color="purple"
        floated='right'
        size='massive'>
        </Button>

        </Grid.Column>

       
        
      <Grid.Column
      floated='right'
      width={5}>
       
        
        <Button 
        icon='file outline'
        color='green'
        floated='left'
        size='massive'>
        </Button>

        <Button 
        icon='cube'
        color="yellow"
        floated='middle'
        size='massive'>
        </Button>

        <Button 
        icon='cut'
        color="purple"
        floated='right'
        size='massive'>
        </Button>
          
      
      </Grid.Column>

    </Grid>
    
     <Divider vertical>VS</Divider>

    </Segment>
    </div>
      );

  }
}

export default App;
