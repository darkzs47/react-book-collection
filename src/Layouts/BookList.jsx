import React from 'react';
import styles from './bookList.module.css';
import {useSelector} from "react-redux";
import BookCard from "../Components/BookCard.jsx";

const BookList = () => {
    const books = useSelector(state => state.books.booksList);

    return (
        <div className={styles.bookList}>
            {books.map((book) =>
                <BookCard key={book.id} book={book} />
            )}
        </div>
    )
}

export default React.memo(BookList);