import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../Layouts/header.module.css";
import React from "react";
import counterReducer from "../redux/counterBadger/reducer.js";
import {useDispatch, useSelector} from "react-redux";

const CounterBadger = () => {
    const countBadger = useSelector((state) => state.counter.count);

    return (
        <>
            <div className={styles.counterBadge}>
                <FavoriteIcon className={styles.favoriteIcon}/>
                <span className={styles.badgeCount}>{countBadger}</span>
            </div>
        </>
    )
}

export default React.memo(CounterBadger);