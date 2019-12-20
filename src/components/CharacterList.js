import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-dom";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  console.log(props);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/').then(res => {
        setCharacters(res);
        console.log(res);
      })
      .catch(err => {
        console.log("Server Error", err);
      });
    }
    console.log(characters);
    getCharacters();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [characters]);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterCard 
          key={character}/>
        )
        // <Link to={`character/${character.id}`}></Link>
})}
    </section>
  );
}
