import Grid from  "./Grid";
import { shallow } from "enzyme";
import Thumb from "../Thumb/Thumb";


describe("Grid", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Grid  header="Ricky and Morty" children={ Thumb } />);
    const h1=wrapper.find("h1");
    const div=wrapper.find("div");

    expect(h1.text()).toBe("Ricky and Morty");
    expect(div.length).toBe(2)
   
  });
  
})
