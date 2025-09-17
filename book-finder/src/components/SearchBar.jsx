// components/SearchBar.jsx
import React, { useState } from "react";

/**
 * SearchBar Component
 * - Handles user input and search submission
 * - Calls the onSearch function passed from App
 */
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim()); // Pass the query to parent
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 max-w-xl mx-auto p-4"
    >
      <input
        type="text"
        value={query}
        placeholder="Search for a book..."
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border rounded-lg px-3 py-2 focus:ring focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
