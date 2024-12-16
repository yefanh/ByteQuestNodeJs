// bytequest/app/search/page.tsx
"use client";

import { useState } from "react";
import { useSearch } from "@/store/use-search";
import axios from "axios";
import Link from "next/link";

// Define the type of the response data
type Post = {
  id: number;
  title: string;
  body: string;
};

const SearchPage = () => {
  const { query, setQuery, results, setResults } = useSearch();
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Use Axios generics to specify the response type
      const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: { q: query },
      });
      setResults(response.data); // Now TypeScript knows response.data is Post[]
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Page</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Search for posts"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && results.length > 0 && (
        <ul className="space-y-2">
          {results.map((result: Post) => (
            <li key={result.id} className="border p-2 rounded">
              <Link
                href={`/details/${result.id}`}
                className="text-blue-500 hover:underline"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!loading && results.length === 0 && (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchPage;
