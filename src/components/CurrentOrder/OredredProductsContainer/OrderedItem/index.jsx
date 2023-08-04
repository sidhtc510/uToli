import React, { useState } from "react";
import s from "./s.module.css";
import Button from "../../../UI/Button";
import { BsTrash, BsCheckLg } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { decrAction, deleteAction, incrAction } from "../../../../store/slices/currentOrderSlice";
import { useDispatch } from "react-redux";

export default function OrderedItem({ id, name, dsc, img, price, count }) {
    const dispatch = useDispatch();
    const [confirmDeleting, setConfirmDeleting] = useState(false);

    const deleteItem = () => {
        if (!confirmDeleting) {
            setConfirmDeleting(true);
            setTimeout(() => {
                setConfirmDeleting(false);
            }, 3000);
        } else {
            dispatch(deleteAction(id));
            setConfirmDeleting(false);
        }
    };

    return (
        <div className={s.orderedItem_item_wrap}>
            <img src={img} alt="" />
            <div>
                <p>
                    {count} X {name} ({price}) = {(price * count).toFixed(2)}
                </p>
                <div>
                    <Button onClick={() => dispatch(decrAction(id))}>
                        <AiOutlineMinusCircle />
                    </Button>
                    <Button onClick={() => dispatch(incrAction(id))}>
                        <AiOutlinePlusCircle />
                    </Button>
                    <Button onClick={deleteItem}>{confirmDeleting ? <BsCheckLg /> : <BsTrash />}</Button>
                </div>
            </div>
        </div>
    );
}
