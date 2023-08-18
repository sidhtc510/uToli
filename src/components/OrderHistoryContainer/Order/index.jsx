import React from "react";
import OrderedItem from "../../CurrentOrder/OredredProductsContainer/OrderedItem";
import { useNavigate } from "react-router-dom";
import s from "./s.module.css";

export default function Order({ order }) {
    const navigate = useNavigate();

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

    return (
        <div className={s.Order_wrap}>
            <p onClick={() => navigate(-1)}>{`<<return`}</p>
            <p>ordered: <b>{normalizeDate(order.date)}</b></p>
            <p>amount: <b>{order.orderAmount}</b></p>
            <div>
                {order.content.map((el) => (
                    <OrderedItem key={el.id} {...el} isHistoryOrder={true} />
                ))}
            </div>
        </div>
    );
}
