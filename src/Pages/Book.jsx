import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import BookInfo from "../Layouts/BookInfo.jsx";
import ReadingBlock from "../Layouts/ReadingBlock.jsx";
import styles from "./book.module.css";

const Book = () => {
    const {id} = useParams();
    const books = useSelector((state) => state.books.booksList);
    const book = books.find(b => b.id === parseInt(id));

    return (
            <main className={styles.main}>
                <BookInfo book={book}/>
                <ReadingBlock/>
            </main>
    )
}

export default React.memo(Book);