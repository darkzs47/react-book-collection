import {InputNumber, Slider} from "antd";
import React, {memo} from "react";
import styles from "../Layouts/filter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectYearsBooks} from "../redux/filters/actions.js";

const YearSlider = () => {
    const dispatch = useDispatch();
    const {minYear: minYear, maxYear: maxYear} = useSelector((state) => state.filter.selectedYears);

    const onChange = (value) => {
        const [start, end] = value;
        dispatch(selectYearsBooks(start, end));
    }

    const onStartChange = (value) => {
        const newStart = Math.min(value, maxYear);
        dispatch(selectYearsBooks(newStart, maxYear));
    };

    const onEndChange = (value) => {
        const newEnd = Math.max(value, minYear);
        dispatch(selectYearsBooks(minYear, newEnd));
    };

    return (
        <>
            <h4>Год выпуска</h4>
            <div className={styles.rangeWrapper}>
                <InputNumber
                    min={1950}
                    max={2025}
                    value={minYear}
                    onChange={onStartChange}
                    className={styles.input}
                />
                <Slider
                    range
                    min={1950}
                    max={2025}
                    value={[minYear, maxYear]}
                    onChange={onChange}
                    className={styles.slider}
                />
                <InputNumber
                    min={1900}
                    max={2025}
                    value={maxYear}
                    onChange={onEndChange}
                    className={styles.input}
                />
            </div>
        </>
    )
}

export default memo(YearSlider);