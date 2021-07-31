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
        <img src={image} alt="character-img"/>
        <div className="characterInfo">
          <h1>{name}</h1>
          <p>Status:<b>{status}</b></p>
          <p>Species:<b>{species}</b></p>
          <p>Gender:<b>{gender}</b></p>
          <p>Location:<b>{location}</b></p>
          <EpisodesName episodeName={episodeName} />
        </div>
      </div>
    )
}

export default CharacterInfo;

