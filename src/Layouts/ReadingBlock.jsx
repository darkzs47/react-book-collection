import {memo} from "react";
import styles from "./readingBlock.module.css"
import TextSettings from "../Components/TextSettings.jsx";
import Text from "../Components/Text.jsx";

const ReadingBlock = () => {

    return (
        <div className={styles.readingBlock}>
            <TextSettings/>
            <Text/>
        </div>
    )
}

export default memo(ReadingBlock);