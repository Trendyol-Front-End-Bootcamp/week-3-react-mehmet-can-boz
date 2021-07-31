import {
  CHARACTER_BASE_URL,
  EPISODES_BASE_URL
} from '../config';
import axios from 'axios';

export const fetchCharacters = async (page,{status="",gender=""}) =>{
  const data = await axios.get(`${CHARACTER_BASE_URL}/?page=${page}&status=${status}&gender=${gender}`)
  .then((response) => {
        return response.data;
  })
  .catch(err=> err)
  
  return data;  
}

export const fetchCharacter = async (characterId) =>{ 
  const data =await axios.get(`${CHARACTER_BASE_URL}/${characterId}`)
  .then((response) => {
    return response.data;
  })
  .catch(err=> err)
  
  return data;  
}


export const episodeFetch = async (episodes) =>{
  const data = await axios.get(`${EPISODES_BASE_URL}/${episodes}`)
    .then((response) => {
       return response.data;
    })
    .catch(err=> err)

    return data;
}
