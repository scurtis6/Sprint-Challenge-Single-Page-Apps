import React from "react";
import {Character, CharacterDiv, SpeciesP, GenderP, OriginP, Url} from './Styles';

 const CharacterCard = props => {
  console.log(props)
    return (
    <div className="character" key={props.id}>
      <Character className="name">Character: {props.name}</Character>
      <CharacterDiv>
      <SpeciesP className="species">Species: {props.species}</SpeciesP>
      <GenderP className="gender">Gender: {props.gender}</GenderP>
      <OriginP className="origin">Origin: {props.origin}</OriginP>
      <Url>Link: {props.url}</Url>
      </CharacterDiv>
    </div>
  );
};

export default CharacterCard;
