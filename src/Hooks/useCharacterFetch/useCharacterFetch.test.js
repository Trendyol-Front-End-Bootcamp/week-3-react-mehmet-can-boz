import { renderHook } from "@testing-library/react-hooks";
import { useCharacterFetch } from "./useCharacterFetch";

describe("useFetch hook tests", () => {
  it.only("should properly set data", async () => {
    const { result } = renderHook(() => useCharacterFetch());
  });
  
});