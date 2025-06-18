import React, {useEffect, useRef} from "react";
import styles from "./filter.module.css";
import AuthorSelect from "../Components/AuthorSelect.jsx";
import YearSlider from "../Components/YearSlider.jsx";
import FavoritesCheckbox from "../Components/FavoritesCheckbox.jsx";
import {Button} from "antd";
import {
    resetFilters,
    selectAuthorsBooks,
    selectYearsBooks,
    setOnlyFavoriteBooks,
} from "../redux/filters/actions.js";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const FilterPanel = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter);

    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) return;
        const {minYear, maxYear} = filters.selectedYears;
        const params = new URLSearchParams();

        filters.selectedAuthors.forEach(author => params.append("author", author));

        if (minYear !== 1950 || maxYear !== 2025) {
            params.set("minYear", minYear);
            params.set("maxYear", maxYear);
        }

        if (filters.onlyFavoriteBooks) params.set("favorites", "true");
        if (filters.length === 0) setSearchParams('');
        setSearchParams(params);
    }, [filters]);

    useEffect(() => {
        const authorsFromUrl = searchParams.getAll("author");
        const minYearFromUrl = searchParams.get("minYear");
        const maxYearFromUrl = searchParams.get("maxYear");
        const favoritesFromUrl = searchParams.get("favorites");

        if (authorsFromUrl.length > 0) {
            dispatch(selectAuthorsBooks(authorsFromUrl));
        }

        if (minYearFromUrl && maxYearFromUrl) {
            dispatch(selectYearsBooks({
                minYear: minYearFromUrl,
                maxYear: maxYearFromUrl
            }));
        }

        if (favoritesFromUrl) {
            dispatch(setOnlyFavoriteBooks(favoritesFromUrl));
        }

        firstRenderRef.current = false;
    }, []);

    const clickHandler = () => {
        dispatch(resetFilters())
        setSearchParams('');
    }

    return (
        <aside className={styles.filter}>
            <h3 className={styles.h3}>Фильтр</h3>
            <AuthorSelect/>
            <YearSlider/>
            <FavoritesCheckbox/>
            <Button className={styles.button} onClick={clickHandler} type="link">Сбросить фильтры</Button>
        </aside>
    )
}

export default React.memo(FilterPanel);