import React from 'react';


const CharacterInfo = ({image,name,status,species,gender,location,episodes} )=>(
    <div className="wrapper">
       <img src={image} alt="character-img"/>
       <div className="characterInfo">
            <h1>{name}</h1>
            <p>Status:<b>{status}</b></p>
            <p>Species:<b>{species}</b></p>
            <p>Gender:<b>{gender}</b></p>
            <p>Location:<b>{location}</b></p>
            <p>Episodes: <b>{episodes}</b></p>
       </div>
    </div>
)

export default CharacterInfo;