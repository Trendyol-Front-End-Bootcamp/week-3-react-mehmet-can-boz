import NotFound from  "./NotFound";
import { shallow } from "enzyme";
describe("NotFound", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotFound  />);
    const h1 = wrapper.find("h1")
    
    expect(wrapper.hasClass("notFound")).toEqual(true);
    expect(h1.text()).toBe('Not Found');

  });
  
})