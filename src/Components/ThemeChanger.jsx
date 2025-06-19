import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {Switch} from "@mui/material";
import styles from "../Layouts/header.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "../redux/theme/actions.js";

const ThemeChanger = () => {
    const dispatch = useDispatch();

    const theme = useSelector((state) => state.theme.mode);

    const checked = theme === "dark";

    return (
        <>
            <div className={styles.themeChanger}>
                <WbSunnyIcon className={styles.sunny}/>
                <Switch checked={checked} onChange={() => dispatch(toggleTheme())}/>
                <DarkModeIcon className={styles.moon}/>
            </div>
        </>
    )
}

export default React.memo(ThemeChanger);