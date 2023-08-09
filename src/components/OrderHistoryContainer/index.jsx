import React from "react";

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
    const dayAmount = producedOrderHistory.reduce((acc, el) => acc + el.orderAmount, 0);
    // console.log(dayAmount);
    return (
        <div>
            <div>Amount: {dayAmount}</div>
            {producedOrderHistory.map((el) => (
                <p>
                    {normalizeDate(el.date)} | Amount: <b style={{ color: "red" }}> {el.orderAmount}</b>
                </p>
            ))}
        </div>
    );
}
