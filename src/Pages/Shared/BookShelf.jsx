import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SingleBook from "./SingleBook";

const BookShelf = () => {
  const data = useLoaderData();

  // Search & Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [readingStatus, setReadingStatus] = useState("All");

  // Filtered Data
  const filteredBooks = data.filter((book) => {
    // Filter by search term (book_title or book_author)
    const searchFilter =
      book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.book_author.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by reading status
    const statusFilter =
      readingStatus === "All" || book.reading_status === readingStatus;

    return searchFilter && statusFilter;
  });

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 mb-4 w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Dropdown Filter */}
      <select
        className="border p-2 mb-6"
        value={readingStatus}
        onChange={(e) => setReadingStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Read">Read</option>
        <option value="Reading">Reading</option>
        <option value="Want-to-Read">Want-to-Read</option>
      </select>

      {/* Books Grid */}
      <div className="grid lg:grid-cols-4 gap-10 py-10">
        {filteredBooks.map((singleBook) => (
          <Link to={`/book-shelf/${singleBook._id}`} key={singleBook._id}>
            <SingleBook singleBook={singleBook} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
