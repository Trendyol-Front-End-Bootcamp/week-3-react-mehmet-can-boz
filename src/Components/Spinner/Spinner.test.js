import Spinner from  "./Spinner";
import {render} from "@testing-library/react";

describe("Spinner",()=>{
    
    it("renders without crashing", () => {
        render(<Spinner />);
    });
})
