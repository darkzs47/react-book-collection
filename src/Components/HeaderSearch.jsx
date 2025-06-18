import styles from "../Layouts/header.module.css";
import {Search} from "@mui/icons-material"
import {InputBase} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setDebouncedValue} from "../redux/search/actions.js";

const HeaderSearch = () => {
    const dispatch = useDispatch();
    const debouncedValue = useSelector((state) => state.search.searchQuery);

    const [searchParams, setSearchParams] = useSearchParams()
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("query");

        const newParams = new URLSearchParams();
        if (debouncedValue) {
            newParams.set("query", debouncedValue);
        }

        for (const [key, value] of params.entries()) {
            newParams.append(key, value);
        }

        setSearchParams(newParams);
    }, [debouncedValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setDebouncedValue(inputValue))
        }, 1000);

        return () => clearTimeout(timeout);
    }, [inputValue]);

    return (
        <>
            <div className={styles.search}>
                <Search className={styles.searchIcon}/>
                <InputBase sx={{
                    color: 'var(--input-text)',
                    '& input::placeholder': {
                        color: 'var(--input-placeholder)',
                    }
                }}
                           value={inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           type='text'
                           placeholder="Поиск..."
                           className={styles.searchInput}
                />
            </div>
        </>
    )
}

export default React.memo(HeaderSearch);