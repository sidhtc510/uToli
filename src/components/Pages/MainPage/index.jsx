import React from "react";
import img from "./coffee.png";
import { useSelector } from "react-redux";
import s from "./s.module.css";
import OrderHistoryContainer from "../../OrderHistoryContainer";

export default function MainPage() {
    const orderHistory = useSelector(({ orderHistory }) => orderHistory);


    return (
        <div className={orderHistory.length <= 0 ? s.wrapStyle : s.mainPage_wrapper}>
            {orderHistory.length <= 0 ? 
            <img style={{ width: "300px" }} src={img} alt="" />
            :
            <OrderHistoryContainer orderHistory={orderHistory}/>
        }
        </div>
    );
}
