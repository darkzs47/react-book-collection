import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {Switch} from "@mui/material";
import styles from "../Layouts/header.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {toggleTheme} from "../redux/theme/actions.js";

const ThemeChanger = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.themeChanger}>
                <WbSunnyIcon className={styles.sunny}/>
                <Switch onChange={() => dispatch(toggleTheme())}/>
                <DarkModeIcon className={styles.moon}/>
            </div>
        </>
    )
}

export default React.memo(ThemeChanger);