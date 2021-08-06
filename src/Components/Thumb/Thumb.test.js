import Thumb from  "./Thumb";
import { shallow } from "enzyme";

const data={
  image:"ricky.png",
  name:"ricky",
  species:"human",
  gender:"male",
  status:"alive",
  location:"earth",
  characterId:1
}


describe("Header", () => {
  it("renders without crashing", () => {
    const { image, name, species, gender, status, location, characterId }=data
    const wrapper = shallow(<Thumb 
        name={name}
        key={characterId}
        image={image}
        species={species}
        gender={gender}
        status={status}
        location={location}
        characterId={characterId}
     />);
    const wrapperRoute = wrapper.find("Link").props().to
    const h3 = wrapper.find("h3");
    const p  = wrapper.find("p");
    const b  = wrapper.find("b");
    
    expect(wrapperRoute).toBe(`/${characterId}`);
    expect(h3.text()).toBe("ricky");
    expect(p.length).toBe(4);
    expect(b.length).toBe(4);
  });
  
})