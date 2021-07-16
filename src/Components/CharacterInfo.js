import React,{useEffect,useState} from 'react';

import EpisodesName from './EpisodesName';
const CharacterInfo = ({image,name,status,species,gender,location,episodes} )=>{

    const [episodeName, setEpisodeName] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/episode/' + episodes)
        .then((response) => response.json())
        .then(function (data) {
            if (data !== null && !Array.isArray(data)) {
                setEpisodeName([data]);
            } else {
                setEpisodeName(data);
            }
        });
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
