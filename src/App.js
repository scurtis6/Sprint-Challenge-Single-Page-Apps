import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
// import Character from "./components/Character";
import WelcomePage from "./components/WelcomePage";
import { Route, Link, Switch } from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  return (

    <div className="App">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/:id">Characters</Link>
      </div>
      <Header />
      <WelcomePage />
          <nav>
        
      </nav>
      <main>
        {/* <Route exact path="/" component={WelcomePage}></Route> */}
        <CharacterList />
      </main>
      
      
   </div>
  );
};
