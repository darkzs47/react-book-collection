import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {Switch} from "@mui/material";
import styles from "../Layouts/header.module.css";

const ThemeChanger = () => {
    return (
        <>
            <div className={styles.themeChanger}>
                <WbSunnyIcon className={styles.sunny}/>
                <Switch/>
                <DarkModeIcon className={styles.moon}/>
            </div>
        </>
    )
}

export default ThemeChanger;