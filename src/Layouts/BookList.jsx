import React from 'react';
import styles from './bookList.module.css';
import {useSelector} from "react-redux";
import BookCard from "../Components/BookCard.jsx";

const DEFAULT_MIN_YEAR = 1950;
const DEFAULT_MAX_YEAR = 2025;

const BookList = () => {
    const books = useSelector(state => state.books.booksList);
    const filters = useSelector(state => state.filter);

    const isDefaultFilter =
        filters.selectedAuthors.length === 0 &&
        filters.selectedYears.minYear === DEFAULT_MIN_YEAR &&
        filters.selectedYears.maxYear === DEFAULT_MAX_YEAR &&
        !filters.onlyFavoriteBooks;

    const filteredBooks = books.filter(book => {
        if (filters.selectedAuthors.length > 0 && !filters.selectedAuthors.includes(book.author)) return false;

        const year = book.year;

        if (year < filters.selectedYears.minYear || year > filters.selectedYears.maxYear) return false;

        return !(filters.onlyFavoriteBooks && !book.favorite);
    });

    return (
        <div className={styles.bookList}>
            {(isDefaultFilter ? books : filteredBooks).map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
}

export default React.memo(BookList);