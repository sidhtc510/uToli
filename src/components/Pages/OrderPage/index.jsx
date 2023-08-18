import React from "react";
import Order from "../../OrderHistoryContainer/Order";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OrderPage() {
    const { orderId } = useParams();
    const order = useSelector(state=>state.orderHistory.list.find(el=>el.id === +orderId))


    return (
        <div>
            <Order order={order}/>
        </div>
    );
}
