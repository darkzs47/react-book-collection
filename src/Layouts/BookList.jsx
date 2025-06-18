import React from 'react';
import styles from './bookList.module.css';
import {useSelector} from "react-redux";
import BookCard from "../Components/BookCard.jsx";
import {useNavigate} from "react-router-dom";

const BookList = () => {
    const navigate = useNavigate();
    const books = useSelector(state => state.books.booksList);
    const filters = useSelector(state => state.filter);
    const querySearch = useSelector(state => state.search.searchQuery);

    const normalizedQuery = querySearch?.trim().toLowerCase();

    const booksAfterSearch = normalizedQuery
        ? books.filter(book =>
            book.title.toLowerCase().includes(normalizedQuery) ||
            book.author.toLowerCase().includes(normalizedQuery)
        )
        : books;

    const filteredBooks = booksAfterSearch.filter(book => {
        if (filters.selectedAuthors.length > 0 && !filters.selectedAuthors.includes(book.author)) return false;

        if (book.year < filters.selectedYears.minYear || book.year > filters.selectedYears.maxYear) return false;

        if (filters.onlyFavoriteBooks && !book.favorite) return false;

        return true;
    });

    return (
        <div className={styles.bookList}>
            {filteredBooks.map(book => (
                <BookCard key={book.id} book={book}
                    onClick={() => {navigate(`/book/${book.id}`)}}
                />
            ))}
        </div>
    )
}

export default React.memo(BookList);