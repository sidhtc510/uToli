import React from "react";
import s from './s.module.css'
export default function OrderHistoryContainer({ orderHistory }) {
    const normalizeDate = (dateString) => {
        const dateObj = new Date(dateString);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            // timeZoneName: 'short'
        };

        const formattedDate = dateObj.toLocaleString("en-EN", options);
        return formattedDate;
    };
    const producedOrderHistory = orderHistory.list.filter(({ show }) => Object.values(show).every((item) => item));
    const dayAmount = producedOrderHistory.reduce((acc, el) => acc + el.orderAmount, 0).toFixed(2);

    return (
        <div className={s.OrderHistoryContainer_amountWrapper}>
            <div >Amount: <b className={s.accent}>{dayAmount}</b></div>
            {producedOrderHistory.map((el) => (
                <p>
                    {normalizeDate(el.date)} | Amount: <b className={s.accent}> {el.orderAmount}</b>
                </p>
            ))}
        </div>
    );
}
