import { renderHook, act } from "@testing-library/react-hooks";
import { useHomeFetch } from "./useHomeFetch";

describe("useFetch hook tests", () => {

    it.only("should properly set data", async () => {
        const data=[5,4]
        const initialState ={
            status:"",
            gender:""
        }
        const { result,rerender  } = renderHook(() => useHomeFetch());

        const{  state,setState,isLoaded,setIsLoaded,isLoadingMore,error,setError,
                pageNumber,setPageNumber,dataInfo,setDataInfo,searchTerm,setSearchTerm,
                setStatusFilter,setGenderFilter,setIsLoadingMore }=result.current;

        expect(setState).toBeDefined();
        expect(setIsLoaded).toBeDefined();
        expect(setError).toBeDefined();
        expect(setPageNumber).toBeDefined();
        expect(setDataInfo).toBeDefined();
        expect(setStatusFilter).toBeDefined();
        expect(setGenderFilter).toBeDefined();
        expect(setIsLoadingMore).toBeDefined();
        
        expect(state).toEqual([])
        expect(isLoaded).toEqual(false)
        expect(error).toEqual(null)
        expect(pageNumber).toEqual(1)
        expect(isLoadingMore).toEqual(false)
        expect(searchTerm).toEqual(initialState)
        expect(dataInfo).toEqual({})

        act(() => setState(data));
        
        expect(result.current.state).toEqual(data);
        
    
    });




});