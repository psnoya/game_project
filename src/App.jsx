import React from "react";
import { Button, Divider, Grid, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';



class App extends React.Component {
  
  render() {
   
    return ( 
      <>
        <Header />
      
    <Segment>
    

    <Grid columns={2} 
          
          >
<Grid.Column 
 width={2}
 floated='centered'
>
        <Button 
        icon='file outline'
        color='green'
        // floated='left'
        size='massive'>
        </Button>

        <Button 
        icon='cube'
        color="yellow"
        // floated='middle'
        size='massive'>
        </Button>

        <Button 
        icon='cut'
        color="purple"
        // floated='right'
        size='massive'>
        </Button>

        </Grid.Column>

       
        
      <Grid.Column
      floated='centered'
      width={2}>
       
        
        <Button 
        icon='file outline'
        color='green'
        // floated='left'
        size='massive'>
        </Button>

        <Button 
        icon='cube'
        color="yellow"
        // floated='middle'
        size='massive'>
        </Button>

        <Button 
        icon='cut'
        color="purple"
        // floated='right'
        size='massive'>
        </Button>
          
      
      </Grid.Column>

    </Grid>
    
     <Divider vertical>VS</Divider>

    </Segment>
    <Footer />
    </>
      );

  }
}

export default App;
