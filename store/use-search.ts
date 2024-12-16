// bytequest/store/use-search.ts
import { create } from "zustand";

type SearchState = {
  query: string;
  results: any[];
  setQuery: (query: string) => void;
  setResults: (results: any[]) => void;
};

export const useSearch = create<SearchState>((set) => ({
  query: "",
  results: [],
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
}));
