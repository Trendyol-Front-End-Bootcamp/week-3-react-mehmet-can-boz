import Search from  "./Search";
import {render} from "@testing-library/react";

describe("Search",()=>{
    
    it("renders without crashing", () => {
        render(<Search />);
    });
})
