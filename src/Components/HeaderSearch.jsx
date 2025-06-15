import styles from "../Layouts/header.module.css";
import {Search} from "@mui/icons-material"
import {InputBase} from "@mui/material";

const HeaderSearch = () => {
    return (
        <>
            <div className={styles.search}>
                <Search className={styles.searchIcon}/>
                <InputBase placeholder="Поиск..." className={styles.searchInput}/>
            </div>
        </>
    )
}

export default HeaderSearch;