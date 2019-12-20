import React from "react";
import {Character, CharacterDiv} from './Styles';

 const CharacterCard = props => {
  console.log(props)
    return (
    <div className="character" key={props.id}>
      <Character className="name">Name: {props.name}</Character>
      <CharacterDiv>
      <p className="species">Species: {props.species}</p>
      <p className="gender">Gender: {props.gender}</p>
      <p className="origin">Origin: {props.origin}</p>
      </CharacterDiv>
    </div>
  );
};

export default CharacterCard;
