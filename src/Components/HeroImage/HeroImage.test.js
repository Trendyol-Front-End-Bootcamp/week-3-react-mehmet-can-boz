import HeroImage from  "./HeroImage";
import {render} from "@testing-library/react";

describe("HeroImage",()=>{
    
    it("renders without crashing", () => {
        render(<HeroImage />);
    });
})
