import Search from  "./Search";
import { render } from "@testing-library/react";
import { mount,shallow } from "enzyme";
describe("Search", () => {
  describe("Search", () => {
    it("renders without crashing", () => {

      const mockGenderFilterCallBack=jest.fn();
      const mockStatusFilterCallBack=jest.fn();
  
      const wrapper=shallow(<Search  gendereventHandler={mockGenderFilterCallBack}  statusEventHandler={mockStatusFilterCallBack} />);
      const h3GenderText=wrapper.find('#gender-filter');
      const resultGenderText=h3GenderText.text()
      
      const h3StatusText=wrapper.find('#status-filter');
      const resultStatusText=h3StatusText.text()
      
      const select= wrapper.find("select")
      const selectLenght=select.length;

      const option= wrapper.find("option")
      const optionLenght=option.length;

      expect(resultStatusText).toBe("Status Filter");
      expect(resultGenderText).toBe("Gender Filter");
      expect(selectLenght).toBe(2);
      expect(optionLenght).toBe(9);
    });
  
  })
})
