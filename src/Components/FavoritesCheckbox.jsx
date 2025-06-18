import {memo} from "react";
import {Checkbox} from "antd";
import styles from "../Layouts/filter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectYearsBooks, toggleFavoriteBooks} from "../redux/filters/actions.js";
import {useSearchParams} from "react-router-dom";

const FavoritesCheckbox = () => {
    const dispatch = useDispatch();
    const onlyFavorite = useSelector((state) => state.filter.onlyFavoriteBooks);

    const onChange = () => {
        dispatch(toggleFavoriteBooks());
    }

    return (
        <>
            <Checkbox
                className={styles.checkbox}
                checked={onlyFavorite}
                onChange={onChange}>
                Только избранное
            </Checkbox>
        </>
    )
}

export default memo(FavoritesCheckbox);