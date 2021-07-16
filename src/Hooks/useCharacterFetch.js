import { useState, useEffect } from "react";
import {fetchCharacter,fetchCharacterEpisodes} from "../API";

export const useCharacterFetch = characterId =>{
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

    return {state,loading,error}
}

export const useEpisodeFetch = (episodes,characterId) =>{
    const [episodeName,setEpisodeName]=useState({});
    const [eloading,setEloading]=useState(true);
    const [eerror,setEerror]=useState(false);
   
    useEffect(()=>{

        const fetchEpisodes= async ()=>{
            try{
                setEloading(true);
                setEerror(false);
    
                const chrepisode=await fetchCharacterEpisodes(episodes);
                if (!Array.isArray(chrepisode)) {
                    setEpisodeName([chrepisode])
                } else {
                    setEpisodeName(chrepisode)
                    
                }
                setEpisodeName(chrepisode)
                setEloading(false);
                
            }catch(error){
                setEerror(true);
            };
            }
            fetchEpisodes();
    },[characterId]);

    return {episodeName,eloading,eerror}
}

