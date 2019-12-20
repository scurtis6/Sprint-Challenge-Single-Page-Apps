import React from "react";

 const CharacterCard = props => {
  console.log(props)
    return (
    <div className="character" key={props.id}>
      <p className="name">Name: {props.name}</p>
      <p className="species">Species: {props.species}</p>
      <p className="gender">Gender: {props.gender}</p>
      <p className="origin">Origin: {props.origin}</p>
    </div>
  );
};

export default CharacterCard;
