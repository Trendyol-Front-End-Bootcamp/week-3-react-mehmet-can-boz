import { useState, useEffect } from "react";
import { fetchCharacter } from "../../Service/API";

export const useCharacterFetch = characterId => {
  const [state,setState]=useState({});
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
   
  useEffect(()=>{
    const fetchSingleCharacter= async ()=>{
      try{
        setLoading(true);
        setError(false);
    
        const character=await fetchCharacter(characterId);
        setState(character)
        setLoading(false);
                
      }catch(error){
        setError(true);
      };
    }

    fetchSingleCharacter();
    
  },[characterId])

    return {state,loading,error,setState,setLoading,setError}
}

