import HeroImage from  "./HeroImage";
import { render } from "@testing-library/react";
import { mount,shallow } from "enzyme";

describe("HeroImage", () => {
  it("renders without crashing", () => {
    const wrapper= shallow(<HeroImage />);
    expect(wrapper.hasClass('hero-img')).toEqual(true);
  });
  
})
