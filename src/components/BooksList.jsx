import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./actions";

const BooksList = () => {
    <h1>Books List</h1>
    const dispatch = useDispatch();

    // Get data from Redux store
    const { books, loading, error } = useSelector((state) => state);

    // State for sorting criteria and order (ascending/descending)
    const [sortCriteria, setSortCriteria] = useState("title");
    const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending, but this could be null or 'asc'

    // Fetch books on component mount
    useEffect(() => {
        dispatch(fetchBooks()); // Fetch data from API
    }, [dispatch]);

    // Sorting function that checks the order and criteria
    const sortBooks = (books, criteria, order) => {
        return [...books].sort((a, b) => {
            let valueA = a[criteria].toLowerCase();
            let valueB = b[criteria].toLowerCase();

            // Ascending order
            if (valueA < valueB) return order === "asc" ? -1 : 1;
            if (valueA > valueB) return order === "asc" ? 1 : -1;
            return 0;
        });
    };

    // If no sorting is applied (i.e., just after initial load), keep original order
    const sortedBooks = sortOrder ? sortBooks(books, sortCriteria, sortOrder) : books;

    return (
        <div>
            <h1>NYT Bestsellers</h1>

            {/* Dropdown to choose sorting criteria */}
            <label htmlFor="sort">Sort by: </label>
            <select
                id="sort"
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
            >
                <option value="title">Title</option>
                <option value="publisher">Publisher</option>
                <option value="author">Author</option>
            </select>

            {/* Toggle between ascending and descending order */}
            <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                Toggle Order ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {/* Render sorted books */}
            <ul>
                {sortedBooks.map((book, index) => (
                    <li key={index}>
                        <strong>{book.title}</strong> by {book.author} <br />
                        Publisher: {book.publisher}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;
