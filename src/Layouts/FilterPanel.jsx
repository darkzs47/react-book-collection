import React from "react";
import styles from "./filter.module.css";
import BookSelect from "../Components/AuthorSelect.jsx";
import YearSlider from "../Components/YearSlider.jsx";
import FavoritesCheckbox from "../Components/FavoritesCheckbox.jsx";
import {Button} from "antd";
import {resetFilters} from "../redux/filters/actions.js";
import {useDispatch} from "react-redux";

const FilterPanel = () => {

    const dispatch = useDispatch();

    return (
        <aside className={styles.filter}>
            <h3 className={styles.h3}>Фильтр</h3>
            <BookSelect/>
            <YearSlider/>
            <FavoritesCheckbox/>
            <Button className={styles.button} onClick={() => dispatch(resetFilters())} type="link">Сбросить фильтры</Button>
        </aside>
    )
}

export default React.memo(FilterPanel);