import {Select} from "antd";
import React, {memo, useState} from "react";
import styles from "../Layouts/filter.module.css"

const books = [
    {author: 'Oliver Hansen', value: 'Oliver Hansen'},
    {author: 'Van Henry', value: 'Van Henry'},
    {author: 'April Tucker', value: 'April Tucker'},
    {author: 'Ralph Hubbard', value: 'Ralph Hubbard'},
    {author: 'Omar Alexander', value: 'Omar Alexander'},
    {author: 'Carlos Abbott', value: 'Carlos Abbott'},
    {author: 'Miriam Wagner', value: 'Miriam Wagner'},
    {author: 'Bradley Wilkerson', value: 'Bradley Wilkerson'},
    {author: 'Virginia Andrews', value: 'Virginia Andrews'},
    {author: 'Kelly Snyder', value: 'Kelly Snyder'},
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
                options={books}
            />
        </>
    )
}

export default memo(BookSelect);