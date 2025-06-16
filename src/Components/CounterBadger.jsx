import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../Layouts/header.module.css";
import React from "react";
import {useSelector} from "react-redux";

const CounterBadger = () => {
    const countBadger = useSelector((state) => state.books.amountFavoriteBook);

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