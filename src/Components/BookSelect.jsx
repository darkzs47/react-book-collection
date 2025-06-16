import {Select} from "antd";
import React, {memo, useState} from "react";
import styles from "../Layouts/filter.module.css"

const books = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const BookSelect = () => {
    const [selectedBooks, setSelectedBooks] = useState([]);

    const handleChange = (value) => {
        setSelectedBooks(value);
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
                value={selectedBooks}
            >
                {books.map((book) => (
                    <Option key={book} value={book}>
                        {book}
                    </Option>
                ))}
            </Select>
        </>
    )
}

export default memo(BookSelect);