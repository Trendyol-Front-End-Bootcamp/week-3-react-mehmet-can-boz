import EpisodesName from  "./EpisodesName";
import { shallow } from "enzyme";

describe("EpisodesName", () => {
  const episodes=[
    {
        id:"1",
        name:"blow",
        air_date:"05042015",
        episode:"S01E05"
    }   
  ]

  it("renders without crashing", () => {
    const wrapper = shallow(<EpisodesName episodeName={ episodes } />);
    const h3 = wrapper.find("h3");
    const thLenght= wrapper.find("th").length
    const episodeName=wrapper.find("#episodeName")
    const episodeDate=wrapper.find("#episodeDate")
    const episodeSeason=wrapper.find("#episodeSeason")

    expect(h3.text()).toBe("Episodes")
    expect(episodeName.text()).toBe("blow")
    expect(episodeDate.text()).toBe("05042015")
    expect(episodeSeason.text()).toBe("S01E05")
    expect(thLenght).toBe(3)

  });
  
})
