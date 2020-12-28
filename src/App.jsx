import React from "react";
import "semantic-ui-css/semantic.min.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Game from "./Components/Game.jsx";
import "./index.css";
import Rules from "./Components/Rules.jsx"


const App = () =>  {
      return (
      <>
        <Header />
        <Rules />

      
          <Game />
 
        <Footer />
      </>
    );
  }


export default App;
