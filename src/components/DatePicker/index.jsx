import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { clearFilter, dateFilterAction } from "../../store/slices/orderHistorySlice";
import s from './s.module.css'
export default function DatePicker() {
    const dispatch = useDispatch();
    const [date, setDate] = useState();
    const [prevDate, setPrevDate] = useState();
    const dateInput = useRef();

    useEffect(() => {
        if (date !== prevDate) {
            dispatch(dateFilterAction(date));
            setPrevDate(date);
        }
    }, [dispatch, date, prevDate]);

    const clearFilterHandler = () => {
        dispatch(clearFilter(true));
        dateInput.current.value = "";
    };

    return (
        <div className={s.DatePicker_wrapper}>
            <input type="date" onChange={(e) => setDate(e.target.value)} ref={dateInput} />
            <button onClick={clearFilterHandler}>X</button>
        </div>
    );
}
