import React from "react";
import FilterPanel from "../Layouts/FilterPanel.jsx";
import BookList from "../Layouts/BookList.jsx";
import styles from "./main.module.css";

const Main = () => {
    return (
        <main className={styles.main}>
            <FilterPanel/>
            <BookList/>
        </main>
    )
}

export default React.memo(Main);