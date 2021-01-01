import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'


const Header = () => {
  return (
  
    <Segment 
    id="header"
    size="massive"
    inverted color= 'teal'
    vertical
    textAlign="center"
    style={{ fontFamily: "ui-rounded",fontSize: 20}}>
      <Icon name='play circle'
      size='big'
      
       />
       
      
      Rock, Paper and Scissors! 
      Let's Play!
    
    
    </Segment>

  )
}
      

  

export default Header
