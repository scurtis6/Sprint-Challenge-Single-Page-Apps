import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route, Link, Switch } from "react-router-dom";
import {NavLinks, NavLinksA} from "./components/Styles";



export default function App() {
  return (

    <div className="App">
      <Header />
      <NavLinks>
        <Link to="/"><NavLinksA>Home</NavLinksA></Link>
        <Link to="/CharactersList"><NavLinksA>Characters</NavLinksA></Link>
        </NavLinks>
        {/* <SearchForm /> */}
      
      
      <main>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/CharactersList">
          <CharacterList />
        </Route>
        {/* <Route path="/Search">
          <SearchForm />
        </Route> */}

      </main>
   </div>
  );
};
