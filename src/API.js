import {
    CHARACTER_BASE_URL,
    EPISODES_BASE_URL,
  } from './config';
import axios from 'axios';

export const fetchCharacters = async () =>{

    const data = axios.get(`${CHARACTER_BASE_URL}`)
    .then((response) => {
        return response.data.results;
    })
    return data;
    
}
export const fetchCharacter = async (characterId) =>{

    const data = axios.get(`${CHARACTER_BASE_URL}/${characterId}`)
    .then((response) => {
         console.log(response.data);
        return response.data;
    })
    return data;
    
}

export const fetchCharactersFilters = async ({status,gender}) =>{

    const data = axios.get(`${CHARACTER_BASE_URL}/?status=${status}&gender=${gender}`)
    .then((response) => {
        return response.data.results;
    })
    return data;
    
}

export const fetchCharacterEpisodes= async(episodeIdarr)=>{
    const data = axios.get(`${EPISODES_BASE_URL}/${episodeIdarr}`)
    .then((response) => {
        return response.data;
    })
    return data;
}