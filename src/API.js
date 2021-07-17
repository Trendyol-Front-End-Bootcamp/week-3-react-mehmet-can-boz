import {
    CHARACTER_BASE_URL,
    EPISODES_BASE_URL,
  } from './config';
import axios from 'axios';

export const fetchCharacters = async (page,search) =>{
    
    let url;
    if(search.status==="" && search.gender===""){
        console.log("a")
        url=`${CHARACTER_BASE_URL}/?page=${page}`
    }else if(search.status==="" && search.gender!==""){
        console.log("a")
        url=`${CHARACTER_BASE_URL}/?page=${page}&gender=${search.gender}`
    }else if(search.status!=="" && search.gender===""){
        console.log("aaa")
        url=`${CHARACTER_BASE_URL}/?page=${page}&status=${search.status}
        `
    }else{
        console.log("aaaa")
        url=`${CHARACTER_BASE_URL}/?page=${page}&status=${search.status}&gender=${search.gender}`
    }
  
    const data = axios.get(url)
    .then((response) => {
        return response.data;
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
/*
export const fetchCharactersFilters = async (page,{status,gender}) =>{

    const data = axios.get(`${CHARACTER_BASE_URL}/?page=${page}status=${status}&gender=${gender}`)
    .then((response) => {
        return response.data;
    })
    console.log(status);
    return data;
    
}
*/