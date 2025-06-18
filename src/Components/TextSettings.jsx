import {memo} from "react";
import styles from "../Layouts/readingBlock.module.css";
import { Radio } from 'antd';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import {useBookPageContext} from "../localContexts/BookPageContext.jsx";

const TextSettings = () => {

    const { fontSize, setFontSize, fontStyle, setFontStyle, textColor, setTextColor } = useBookPageContext();

    return (
        <div className={styles.textSettings}>
            <Radio.Group className={styles.radioButtonGroup} value={fontSize} onChange={e => setFontSize(e.target.value)}>
                <Radio.Button className={styles.radioButtonCentered} value="small">Small</Radio.Button>
                <Radio.Button className={styles.radioButtonCentered} value="medium">Medium</Radio.Button>
                <Radio.Button className={styles.radioButtonCentered} value="large">Large</Radio.Button>
            </Radio.Group>

            <Radio.Group className={styles.radioButtonGroup} value={fontStyle} onChange={e => setFontStyle(e.target.value)}>
                <Radio.Button className={styles.radioButtonCentered} value="bold"><FormatBoldIcon/></Radio.Button>
                <Radio.Button className={styles.radioButtonCentered} value="italic"><FormatItalicIcon/></Radio.Button>
                <Radio.Button className={styles.radioButtonCentered} value="normal"><TextFieldsIcon/></Radio.Button>
            </Radio.Group>

            <Radio.Group className={styles.radioButtonGroup} value={textColor} onChange={e => setTextColor(e.target.value)}>
                <Radio.Button className={styles.radioButtonCentered} value="black">Black</Radio.Button>
                <Radio.Button className={styles.radioButtonCentered} value="sepia">Sepia</Radio.Button>
                <Radio.Button className={styles.radioButtonCentered} value="darkblue">DarkBlue</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default memo(TextSettings);