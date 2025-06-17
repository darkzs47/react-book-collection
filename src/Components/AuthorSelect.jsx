import {Select} from "antd";
import React, {memo} from "react";
import styles from "../Layouts/filter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectAuthorsBooks} from "../redux/filters/actions.js";

const AuthorSelect = () => {
    const dispatch = useDispatch();
    const selectedAuthors = useSelector(state => state.filter.selectedAuthors);

    const books = useSelector(state => state.books.booksList);

    const authorOptions = Array.from(
        new Set(books.map(book => book.author))
    ).map(author => ({
        label: author,
        value: author
    }));

    const handleChange = (value) => {
        dispatch(selectAuthorsBooks(value));
    };

    return (
        <>
            <h4>Авторы</h4>
            <Select
                className={styles.select}
                mode="multiple"
                allowClear
                placeholder="Выберите авторов"
                onChange={handleChange}
                value={selectedAuthors}
                options={authorOptions}
            />
        </>
    )
}

export default memo(AuthorSelect);