import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-dom";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  console.log(props);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
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
    <div className="character-list">
                <SearchForm />

      {characters.map(character => {
        return(
          <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          url={character.url}
          // location={character.location.name}
          />
        );
      })}
      {/* {characters.map(character => (
        <Link to={`/character/${character.id}`}>
          <CharacterDetails key={character.id} character={character} />
          </Link>
      ))} */}
    </div>
  );
}

export default CharacterList;