import {memo} from "react";
import styles from "./readingBlock.module.css"

const ReadingBlock = ({ book }) => {
    return (
        <div className={styles.readingBlock}>

        </div>
    )
}

export default memo(ReadingBlock);