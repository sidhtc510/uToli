import React from "react";
import img from "./coffee.png";
import { useSelector } from "react-redux";
import s from "./s.module.css";
import OrderHistoryContainer from "../../OrderHistoryContainer";
import DatePicker from "../../DatePicker";

export default function MainPage() {
    const orderHistory = useSelector(({ orderHistory }) => orderHistory);

    return (
        <div className={orderHistory.list.length <= 0 ? s.wrapStyle : s.mainPage_wrapper}>
            {orderHistory.list.length <= 0 ? (
                <>
                    <img style={{ width: "300px" }} src={img} alt="" />
                    <p>Orders will be displayed in this page</p>
                </>
            ) : (
                <>
                    <DatePicker />
                    <OrderHistoryContainer orderHistory={orderHistory} />
                </>
            )}
        </div>
    );
}
