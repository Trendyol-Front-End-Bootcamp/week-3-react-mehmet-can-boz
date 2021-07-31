import CharacterInfo from  "./CharacterInfo";
import {render} from "@testing-library/react";

describe("CharacterInfo", () => {
  it("renders without crashing", () => {
    render(<CharacterInfo />);
  });

})
