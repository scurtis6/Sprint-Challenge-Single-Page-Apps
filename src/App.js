import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
// import Character from "./components/Character";
import WelcomePage from "./components/WelcomePage";
import { Route, Link, Switch } from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js";
import {NavLinks, NavLinksA} from "./components/Styles";



export default function App() {
  return (

    <div className="App">
      <NavLinks>
        <Link to="/"><NavLinksA>Home</NavLinksA></Link>
        <Link to="/CharactersList"><NavLinksA>Characters</NavLinksA></Link>
        </NavLinks>
      <Header />
      
      <main>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/CharactersList">
          <CharacterList />
        </Route>

      </main>
   </div>
  );
};
