import { renderHook, act } from "@testing-library/react-hooks";
import { useHomeFetch } from "./useHomeFetch";

describe("useFetch hook tests", () => {
  it("should properly set data", async () => {
    const data=[5,4]
    const initialState ={
      status:"",
      gender:""
    }
      const { result,rerender  } = renderHook(() => useHomeFetch());

      const{ state,setState,isLoaded,setIsLoaded,isLoadingMore,error,setError,
             pageNumber,setPageNumber,dataInfo,setDataInfo,searchTerm,setSearchTerm,
             setStatusFilter,setGenderFilter,setIsLoadingMore }=result.current;

      act(() => setState(data));
        
      expect(result.current.state).toEqual(data); 
    });
});