import React from "react";
import styles from "./filter.module.css";
import BookSelect from "../Components/BookSelect.jsx";
import YearSlider from "../Components/YearSlider.jsx";
import FavoritesCheckbox from "../Components/FavoritesCheckbox.jsx";
import {Button} from "antd";

const FilterPanel = () => {

    return (
        <aside className={styles.filter}>
            <h3 className={styles.h3}>Фильтр</h3>
            <BookSelect/>
            <YearSlider/>
            <FavoritesCheckbox/>
            <Button className={styles.button} type="link">Сбросить фильтры</Button>
        </aside>
    )
}

export default React.memo(FilterPanel);