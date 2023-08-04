import React, { useContext, useEffect, useRef, useState } from "react";
import s from "./s.module.css";

import { useDispatch } from "react-redux";
import { clearAction } from "../../../store/slices/currentOrderSlice";
import { addAction } from "../../../store/slices/orderHistorySlice";
import { Context } from "../../../context";
import Button from "../Button";
import { GrClose } from "react-icons/gr";

export default function ModalWindow({ className, result }) {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const { amount, isModalOpen, setIsModalOpen } = useContext(Context);
    const [change, setChange] = useState(0);

    const settling = () => {
        dispatch(addAction(result));
        dispatch(clearAction());
        setIsModalOpen(false);
        setChange(0);
    };

    useEffect(() => {
        if (!isModalOpen) {
            inputRef.current.value = "";
            setChange(0);
        }

        if (isModalOpen) {
            // console.log(isModalOpen);
            inputRef.current.focus();  // Не работает  причина не ясна
        }
    }, [isModalOpen]);

    return (
        <div className={[s.modalWindow_wrapper, s[className]].join(" ")} onClick={() => setIsModalOpen(false)}>
            <div className={s.modalWindow} onClick={(e) => e.stopPropagation()}>
                <p className={s.closeBtn} onClick={() => setIsModalOpen(false)}>
                    <GrClose />
                </p>

                <p>Due: {amount}</p>
                <p>
                    Cash: <input id="myTextField" ref={inputRef} type="number" onChange={({ target }) => setChange(+target.value - amount)} />
                </p>
                <p>Change: {change < 0 ? "0" : change.toFixed(2)}</p>

                <Button onClick={settling}>Settling the order</Button>
            </div>
        </div>
    );
}
