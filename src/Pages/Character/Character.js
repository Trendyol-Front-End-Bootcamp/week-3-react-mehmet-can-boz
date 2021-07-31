import React from 'react';
import { useParams } from 'react-router-dom';

//Component
import CharacterInfo from '../../Components/CharacterInfo/CharacterInfo';
import Spinner from '../../Components/Spinner/Spinner';
import BreadCrumb from '../../Components/BreadCrump/BreadCrump';

//Hooks
import { useCharacterFetch } from '../../Hooks/useCharacterFetch/useCharacterFetch';

const Character = () => {
  const {characterId}=useParams();
  const {state,error,loading}=useCharacterFetch(characterId); 

  if(loading) return <Spinner />
    
  if(error)
    return <div>Something went Wrong ...</div>
    return (
      <>
        <BreadCrumb charactername ={state.name}/>
        <CharacterInfo
          image={state.image}
          name={state.name}
          status={state.status}
          gender={state.gender}
          species={state.species}
          location={state.location.name}
          episodes={state.episode.slice(0,5).map(function(v){return v.split("/").pop();}).join(",")}
        />
      </>
    )
}

export default Character;