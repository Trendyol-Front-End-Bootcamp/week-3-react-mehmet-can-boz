import BreadCrumb from  "./BreadCrump";
import { shallow } from "enzyme";
import { Link } from 'react-router';

describe("BreadCrumb", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<BreadCrumb charactername="morty"/>);
    const wrapperRoute = wrapper.find("Link").props().to
    const wrapperDiv = wrapper.find("div")
    const wrapperSpan = wrapper.find("span");
    const nameOfCharacterText = wrapper.find("#nameOfCharacter").text();
    const spanHomeText = wrapper.find("#home").text();

    expect(wrapperRoute).toBe('/');
    expect(nameOfCharacterText).toBe("morty");
    expect(spanHomeText).toBe("Home");
    expect(wrapperDiv.length).toBe(2);
    expect(wrapperSpan.length).toBe(3);

  });
  
})
