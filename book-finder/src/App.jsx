// App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

/**
 * App Component
 * - Manages global state (search results, loading, error)
 * - Handles fetching data from Open Library API
 */
export default function App() {
  const [books, setBooks] = useState([]); // Stores fetched book data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message (if any)

  // Function to fetch books from Open Library API
  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    setError("");
    setBooks([]); // clear old results

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      if (!res.ok) throw new Error("Failed to fetch books");

      const data = await res.json();
      setBooks(data.docs); // API returns results in 'docs' array
    } catch {
      setError("Something went wrong. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 📚 Final Header */}
      <header className="bg-blue-600 text-white shadow-md p-6 text-center font-bold text-2xl">
        📚 Book Finder
      </header>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Main Content */}
      <main className="p-4">
        {loading && (
          <div className="flex justify-center items-center p-6">
            {/* Loading Spinner */}
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && <BookList books={books} />}
      </main>
    </div>
  );
}
