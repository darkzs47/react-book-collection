import styles from "../Layouts/header.module.css";
import {Search} from "@mui/icons-material"
import {InputBase} from "@mui/material";
import React from "react";

const HeaderSearch = () => {
    return (
        <>
            <div className={styles.search}>
                <Search className={styles.searchIcon}/>
                <InputBase sx={{
                    color: 'var(--input-text)',
                    '& input::placeholder': {
                        color: 'var(--input-placeholder)',
                    }
                }} placeholder="Поиск..." className={styles.searchInput}/>
            </div>
        </>
    )
}

export default React.memo(HeaderSearch);