import React from 'react';
import { Link } from 'react-router-dom';

const Thumb = ({image,name,species,gender,status,location,characterId,clickable})=>(
  <div className="card-item">
    <h3>{name}</h3>
    <Link to={`/${characterId}`}>
      <img className="card-img" src={image} alt='movie-thumb' />
    </Link>
    <p>Species:<b data-testid="species">{species}</b></p>
    <p>Gender:<b>{gender}</b></p>
    <p>Status:<b>{status}</b></p>
    <p>Last Location:<b>{location}</b></p>
  </div> 
)

export default Thumb;