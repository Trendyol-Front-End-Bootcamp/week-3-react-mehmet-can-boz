import React,{ useEffect, useState } from 'react';
import { episodeFetch } from '../../Service/API';
import EpisodesName from '../EpisodesName/EpisodesName';

const CharacterInfo = ({ image, name, status, species, gender, location, episodes }) => {
  const [episodeName, setEpisodeName] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getEpisodes() {
    try{
      setError(false);
      setIsLoaded(true);
      const data = await episodeFetch(episodes);

      if (data !== null && !Array.isArray(data)) {
        setEpisodeName([data]);
      }else{
        setEpisodeName(data);
      } 
    }catch(error){
      setError(true);
    }    

      setIsLoaded(false);
    };

    useEffect(()=>{
      getEpisodes();

    },[])

    return (
      <div className="wrapper">
        <img id="character"src={image} alt="character-img"/>
        <div className="characterInfo">
          <h1 id="characterName">{name}</h1>
          <p>Status:<b id="characterStatus">{status}</b></p>
          <p>Species:<b id="characterSpecies">{species}</b></p>
          <p>Gender:<b id="characterGender">{gender}</b></p>
          <p>Location:<b  id="characterLocation">{location}</b></p>
          <EpisodesName episodeName={episodeName} />
        </div>
      </div>
    )
}

export default CharacterInfo;

