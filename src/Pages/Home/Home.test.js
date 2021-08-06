import Home from  "./Home";
import { shallow } from "enzyme";

describe("Home", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Home  />);

    expect(wrapper.find("HeroImage").length).toBe(1);
    expect(wrapper.find("Search").length).toBe(1);
    expect(wrapper.find("Button").length).toBe(0);

  });
  
})