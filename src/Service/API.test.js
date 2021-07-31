import axios from "axios";
import {fetchCharacters,fetchCharacter,episodeFetch} from  "./API";

jest.mock('axios');

const pageNumber=5;
const errorMessage="Network Error";
const searchParameters={
  status:"dead",
  gender:"male"
}
const data={
  data:{
    results:[
      {
        id:"1",
        name:"Ricky"
      },
      {
        id:"2",
        name:"Morty"
      }
    ]
  }
}

describe("Fetching all Characters", () => {
    it("should fetches successfully data without querry from API",async () => {
      axios.get.mockImplementationOnce(()=> Promise.resolve(data));
      await expect(fetchCharacters("","")).resolves.toEqual(data.data);
    
    });

    it("should fetches successfully data with pageNumber from API",async () => {
      axios.get.mockImplementationOnce(()=> Promise.resolve(data));
      await expect(fetchCharacters(pageNumber,"")).resolves.toEqual(data.data);
    
    });

    it("should fetches successfully data with pageNumber and searchParameters from API", async ()=>{
      axios.get.mockImplementationOnce(()=> Promise.resolve(data));
      await expect(fetchCharacters(pageNumber,searchParameters)).resolves.toEqual(data.data);
    
    });

    it("should fetches successfully data with searchParameters from API", async ()=>{
      axios.get.mockImplementationOnce(()=> Promise.resolve(data));
      await expect(fetchCharacters("",searchParameters)).resolves.toEqual(data.data);
    
    });
    
    it("should return network error if any problem in API", async ()=>{
      axios.get.mockImplementationOnce(()=> Promise.reject(new Error(errorMessage)))
      expect(fetchCharacters("","")).rejects.toThrow(errorMessage);
    
    });
})

describe("Fetching all Characters",()=>{

    const characterId=5;
   
    const data={
        data:{
            "id": 5,
            "name": "Jerry Smith",
            "status": "Alive",
            "species": "Human",
        }
    }

    it("should fetches successfully single character  from API", async ()=>{

        axios.get.mockImplementationOnce(()=> Promise.resolve(data));
        await expect(episodeFetch(characterId)).resolves.toEqual(data.data);
    });

    it("should return network error if any problem in API", async ()=>{
        

        axios.get.mockImplementationOnce(()=> Promise.reject(new Error(errorMessage)))
        expect(fetchCharacter()).rejects.toThrow(errorMessage);
    });

})

describe("Fetching episodes",()=>{


   
    const data={
        data:{
            "id": 5,
            "name": "Meeseeks and Destroy",
        }
    }

    it("should fetches successfully episodes  from API", async ()=>{

        axios.get.mockImplementationOnce(()=> Promise.resolve(data));
        await expect(episodeFetch()).resolves.toEqual(data.data);
    });

    it("should return network error if any problem in API", async ()=>{
        

        axios.get.mockImplementationOnce(()=> Promise.reject(new Error(errorMessage)))
        expect(episodeFetch()).rejects.toThrow(errorMessage);
    });

})