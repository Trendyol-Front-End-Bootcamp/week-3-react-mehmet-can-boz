import Spinner from  "./Spinner";
import { shallow } from "enzyme";

describe("Spinner", () => {
  it("renders without crashing", () => {
    const wrapper= shallow(<Spinner />);
    expect(wrapper.hasClass('spinner')).toEqual(true);
  });

})
