import {InputNumber, Slider} from "antd";
import React, {memo, useState} from "react";
import styles from "../Layouts/filter.module.css"

const YearSlider = () => {
    const [startDate, setStartDate] = useState(2000);
    const [endDate, setEndDate] = useState(2025);

    const onChange = (value) => {
        const [start, end] = value;
        setStartDate(start);
        setEndDate(end);
    }

    const onStartChange = (value) => {
        const newStart = Math.min(value, endDate);
        setStartDate(newStart);
    };

    const onEndChange = (value) => {
        const newEnd = Math.max(value, startDate);
        setEndDate(newEnd);
    };

    return (
        <>
            <h4>Год выпуска</h4>
            <div className={styles.rangeWrapper}>
                <InputNumber
                    min={1950}
                    max={endDate}
                    value={startDate}
                    onChange={onStartChange}
                    className={styles.input}
                />
                <Slider
                    range
                    min={1950}
                    max={2025}
                    value={[startDate, endDate]}
                    onChange={onChange}
                    className={styles.slider}
                />
                <InputNumber
                    min={startDate}
                    max={2025}
                    value={endDate}
                    onChange={onEndChange}
                    className={styles.input}
                />
            </div>
        </>
    )
}

export default memo(YearSlider);