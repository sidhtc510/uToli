import React, { useContext } from "react";
import s from "./s.module.css";
import Button from "../UI/Button";
import { Context } from "../../context";

export default function Amount() {
    const { amount } = useContext(Context);
    return (
        <div className={s.amount_wrap}>
            <p>{amount}</p>
            <Button className={s.amount_btn}>Settling the bill</Button>
        </div>
    );
}
