
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
  const [isLoadingMore,setIsLoadingMore]=useState(false);
  const [pageNumber,setPageNumber]=useState(1);
  const [dataInfo,setDataInfo]=useState({})
   
  const setStatusFilter=(event)=>{
    setState([])
    setPageNumber(1)
    setSearchTerm(prev => ({...prev, status: event.target.value}))
  }
  
  const setGenderFilter=(event)=>{
    setState([])
    setPageNumber(1)
    setSearchTerm(prev => ({...prev, gender: event.target.value}))
  }

  async function getCharacters(page,searchTerm) {

        try{

          setError(false);
          setIsLoaded(true);
          const data = await fetchCharacters(page,searchTerm);
          setDataInfo(data.info)
          setState(state.concat(data.results))
          
        }catch(error){
          setError(true);
        }    

        setIsLoaded(false);
  };

useEffect(() => {

    getCharacters(pageNumber,searchTerm);

}, [searchTerm,pageNumber])

    //Load More
useEffect(()=>{

if(!isLoadingMore) return;
  
  setPageNumber(pageNumber + 1);
  getCharacters(pageNumber,searchTerm); 
  setIsLoadingMore(false);
  
},[isLoadingMore])

  return {
    state,isLoaded,error,pageNumber,dataInfo,setStatusFilter,setGenderFilter,setIsLoadingMore
  }
}

/*
  async function getCharactersbyFilter(page) {

        try{
          setError(false);
          setIsLoaded(true);
          const data = await fetchCharactersFilters(page,searchTerm);
          if(pageNumber===1){
            setState(data.results)
            setDataInfo(data.info)
          }else{
            console.log(data);
            setState(state.concat(data.results))
            setDataInfo(data.info)
            console.log(state);
          }
        }catch(error){
          setError(true);
        }
          setIsLoaded(false);
    };
*/