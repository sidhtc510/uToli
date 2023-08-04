import React, { useContext, useEffect } from "react";
import s from "./s.module.css";
import Button from "../UI/Button";
import { Context } from "../../context";

export default function Amount() {
    const { amount, setIsModalOpen } = useContext(Context);

    console.log((amount===0));
    return (
        <div className={s.amount_wrap}>
            <p>{amount}</p>
       
                <Button disabled={(amount===0)} className={s.amount_btn} onClick={() => setIsModalOpen(true)}>
                    Settling the bill
                </Button>
         
        </div>
    );
}
