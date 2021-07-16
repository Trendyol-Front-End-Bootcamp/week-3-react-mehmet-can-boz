import React from 'react';

import { useEpisodeFetch } from '../Hooks/useCharacterFetch';

const EpisodesName = ({episodes,chid}) =>{
    console.log(episodes);
    const {episodeName}=useEpisodeFetch(episodes,chid);
 
    return(
      <>

      {
        
        Array.prototype.map.call(episodeName,(element,index) =>{
            return <h1 key={index}>{element.name}</h1>
        } )
        
      }
      </>
    )
}
export default EpisodesName;