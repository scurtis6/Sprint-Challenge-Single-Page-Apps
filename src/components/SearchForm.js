import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";
import {Link} from "react-router-dom";

// const characters = [
//   "Rick Sanchez",
//   "Morty Smith",
//   "Summer Smith",
//   "Beth Smith",
//   "Jerry Smith",
//   "Abadango Cluster Princess",
//   "Abradolf Lincler",
//   "Adjudicator Rick",
//   "Agency Director",
//   "Alan Rails",
//   "Albert Einstein",
//   "Alexander",
//   "Alien Googah",
//   "Alien Morty",
//   "Alien Rick",
//   "Amish Cyborg",
//   "Annie",
//   "Antenna Morty",
//   "Antenna Rick",
//   "Ants in my Eyes Johnson"
// ];

export default function SearchForm() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const characters = response.data.results.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (characters);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
return (
  <div >
    <form >
      <input
      id="name" 
      type="text" 
      name="textfield" 
      placeholder="Search here"
      value={query} 
      onChange={handleInputChange}
      />

    {/* <button type="button">Enter</button> */}
    </form>

    {data.map((char => {
    return(
      <CharacterCard 
      key={char.id} 
      name={char.name} 
      species={char.species} 
      gender={char.gender}
      origin={char.origin.name}
      url={char.url}
      />)
  }
))}

</div>
)} 