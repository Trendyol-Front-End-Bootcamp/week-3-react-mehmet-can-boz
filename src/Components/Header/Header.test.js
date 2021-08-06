import Header from  "./Header";
import { shallow } from "enzyme";
describe("Header", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header  />);
    const wrapperRoute = wrapper.find("Link").props().to
    const header = wrapper.find("header");
    const svg = wrapper.find("svg");
    const div = wrapper.find("div");

    expect(wrapperRoute).toBe('/');
    expect(header.length).toBe(1);
    expect(svg.length).toBe(1);
    expect(div.length).toBe(1);
  });
  
})