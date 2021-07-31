import React from 'react';

//Components
import Grid from '../../Components/Grid/Grid';
import Thumb from '../../Components/Thumb/Thumb';
import HeroImage from '../../Components/HeroImage/HeroImage';
import Search from '../../Components/Search/Search';
import Spinner from "../../Components/Spinner/Spinner";
import Button from '../../Components/Button/Button';

//Hooks
import { useHomeFetch } from "../../Hooks/useHomeFetch/useHomeFetch";

const Home = () =>{
  const {state,error,isLoaded,searchTerm,setStatusFilter,setGenderFilter,dataInfo,setIsLoadingMore,pageNumber}=useHomeFetch();

  if(error)
    return <div>Something went Wrong ...</div>
    return (
      <>
        <HeroImage/>
        <Search gendereventHandler={setGenderFilter} statusEventHandler={setStatusFilter}/>
        <Grid header={searchTerm ? 'Search Result' : "Popular Characters"}>
        {
          state.map(character=>{   
            return <Thumb
              name={character.name}
              key={character.id}
              clickable
              image={character.image}
              species={character.species}
              gender={character.gender}
              status={character.status}
              location={character.location.name}
              characterId={character.id}
            />;  
          })
        }
        </Grid>
        {isLoaded && <Spinner/>}
        {pageNumber < dataInfo.pages && !isLoaded && (
          <Button text='Load More' callback={()=> setIsLoadingMore(true)}/>
        )} 
      </>
    )
}

export default Home;