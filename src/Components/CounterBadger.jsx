import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../Layouts/header.module.css";
    
const CounterBadger = () => {
    return (
        <>
            <div className={styles.counterBadge}>
                <FavoriteIcon className={styles.favoriteIcon}/>
                <span className={styles.badgeCount}>4</span>
            </div>
        </>
    )
}

export default CounterBadger;