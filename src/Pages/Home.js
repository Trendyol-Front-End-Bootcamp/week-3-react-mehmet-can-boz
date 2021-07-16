import React from 'react';
//Components
import Grid from '../Components/Grid';
import Thumb from '../Components/Thumb';
import HeroImage from '../Components/HeroImage';
import Search from '../Components/Search';
//Hooks
import {useHomeFetch,} from "../Hooks/useHomeFetch";


const Home = () =>{
    const {state,error,searchTerm,setStatusFilter,setGenderFilter}=useHomeFetch();

    if(error)
    return <div>Something went Wrong ...</div>
    
    return (
        <>
        <HeroImage/>
        <Search gendereventHandler={setGenderFilter} statusEventHandler={setStatusFilter}/>
        <Grid header={searchTerm ? 'Search Result' : "Popular Characters"}>
        
        {
            state.map(character=>{
              
                return   <Thumb
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
        </>
    )

}

export default Home;