import Button from  "./Button";
import { render } from "@testing-library/react";
import { mount,shallow } from "enzyme";

describe("Button", () => {
  it("renders without crashing", () => {
    const wrapper=shallow(<Button text={"Render Button"}/>);
    const button= wrapper.find("button");
    const buttonText= wrapper.text();

    expect(buttonText).toBe("Render Button")

  });

})
