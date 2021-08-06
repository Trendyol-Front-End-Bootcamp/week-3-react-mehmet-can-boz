import Character from  "./Character";
import { shallow } from "enzyme";

describe("Character", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Character  />);

  });
  
})