
import {useEffect,useState} from 'react';
import {fetchCharacters,fetchCharactersFilters} from "../API";

const initialState ={
    status:"",
    gender:""
}
export const useHomeFetch = () =>{

  const [searchTerm,setSearchTerm]=useState(initialState);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const[state,setState]=useState([]);

  const setStatusFilter=(event)=>{
    setSearchTerm(prev => ({...prev, status: event.target.value}))
  }
  
  const setGenderFilter=(event)=>{
    setSearchTerm(prev => ({...prev, gender: event.target.value}))
  }

  async function getCharacters() {

        try{
          setError(false);
          setIsLoaded(true);
          const data = await fetchCharacters();
          setState(data);
       
        }catch(error){
          setError(true);
        }
        setIsLoaded(false);

  };

  async function getCharactersbyFilter() {

        try{
          setError(false);
          setIsLoaded(true);
          const data = await fetchCharactersFilters(searchTerm);
          setState(data);
          console.log(data);
        }catch(error){
          setError(true);
        }
          setIsLoaded(false);
    };

  useEffect(() => {

    if(searchTerm.status==="" && searchTerm.gender===""){
      getCharacters();
    }
    else{
      getCharactersbyFilter()
    }
  }, [searchTerm])

  return {
    state,isLoaded,error,setStatusFilter,setGenderFilter
  }
}