// components/BookCard.jsx
import React from "react";

/**
 * BookCard Component
 * - Displays details of a single book
 * - Shows cover, title, author(s), and first published year
 */
export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="rounded-lg shadow-md bg-white p-3 hover:shadow-lg transition">
      {/* Book Cover */}
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-60 object-cover rounded"
      />

      {/* Book Info */}
      <div className="mt-3">
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-sm text-gray-700">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-sm text-gray-500">
          {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
}
