import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dateFilterAction } from "../../store/slices/orderHistorySlice";

export default function DatePicker() {
    const dispatch = useDispatch();
    const [date, setDate] = useState();
    const [prevDate, setPrevDate] = useState();

    useEffect(() => {
        if (date !== prevDate) {
            dispatch(dateFilterAction(date));
            setPrevDate(date);
        }
    }, [dispatch, date, prevDate]);

    return (
        <div>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>
    );
}
