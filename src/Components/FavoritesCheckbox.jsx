import {memo} from "react";
import {Checkbox} from "antd";
import styles from "../Layouts/filter.module.css"

const FavoritesCheckbox = () => {
    const onChange = () => {
        console.log("OnlyFavorite");
    }

    return (
        <>
            <Checkbox className={styles.checkbox} onChange={onchange}>Только избранное</Checkbox>
        </>
    )
}

export default memo(FavoritesCheckbox);