import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-dom";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  console.log(props);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log(characters);
    const getCharacters =() => {
      axios.get('https://rickandmortyapi.com/api/character/').then(res => {
        setCharacters(res);
        console.log(res);
      })
      .catch(err => {
        console.log("Server Error", err);
      });
    }

    getCharacters();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <Link to={`character/${character.id}`}></Link>
      ))}
    </section>
  );
}
