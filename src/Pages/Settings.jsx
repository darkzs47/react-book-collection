import React from "react";
import {Button} from "antd";
import styles from "./settings.module.css"
import {useDispatch} from "react-redux";
import {resetFavorite} from "../redux/books/actions.js";

const Settings = () => {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(resetFavorite())
    }

    return (
        <main className={styles.main}>
            <Button type="primary" danger onClick={clickHandler}>
                Сбросить избранное
            </Button>
        </main>
    )
}

export default React.memo(Settings);