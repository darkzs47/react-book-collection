import {memo} from "react";
import styles from "../Pages/settings.module.css"
import MiniCard from "../Components/MiniCard.jsx";

const Preview = () => {
    return (
        <div className={styles.preview}>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
        </div>
    )
}

export default memo(Preview);