// components/BookList.jsx
import React from "react";
import BookCard from "./BookCard";

/**
 * BookList Component
 * - Renders a grid of BookCard components
 * - Handles "no results" state gracefully
 */
export default function BookList({ books }) {
  if (!books || books.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No results found. Try searching for another book.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
