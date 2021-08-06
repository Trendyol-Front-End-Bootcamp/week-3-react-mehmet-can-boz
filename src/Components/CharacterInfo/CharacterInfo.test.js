import CharacterInfo from  "./CharacterInfo";
import {shallow } from "enzyme";

describe("CharacterInfo", () => {
  const data={
    image:"ricky.jpg",
    name:"ricky",
    status:"alive", 
    species:"human", 
    gender:"male",
    location:"earth",
    episodes:{
      id:"1",
      name:"blow",
      airdate:"12.04.2021",
      episode:"S1E3"
    }
  }
  it("renders without crashing", () => {
    const {image, name, status, species, gender, location, episodes}=data;
    const wrapper=shallow(<CharacterInfo 
    image={image}
    name={name}
    status={status}
    gender={gender}
    species={species}
    location={location}
    episodes={episodes}
    />);

    const imgSrc= wrapper.find("img").prop('src');
    const characterNameText = wrapper.find("#characterName").text();
    const characterStatusText = wrapper.find("#characterStatus").text();
    const characterSpeciesText = wrapper.find("#characterSpecies").text();
    const characterGenderText = wrapper.find("#characterGender").text();
    const characterLocationText = wrapper.find("#characterLocation").text();
    const characrerEpisodes= wrapper.find("EpisodesName")
   
    expect(imgSrc).toBe("ricky.jpg");
    expect(characterNameText).toBe("ricky");
    expect(characterStatusText).toBe("alive");
    expect(characterSpeciesText).toBe("human");
    expect(characterGenderText).toBe("male");
    expect(characterLocationText).toBe("earth");
    expect(characrerEpisodes.length).toBe(1);
  });
})
