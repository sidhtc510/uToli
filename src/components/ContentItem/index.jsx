import React from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { addAction } from "../../store/slices/currentOrderSlice";

export default function ContentItem({ id, name, dsc, img, price }) {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addAction({ id }));
    };

    return (
        <div className={s.contentItem_item} onClick={addToCart}>
            <img src={img} alt={name} />
            <h4>{name}</h4>
            <p>{price.toFixed(2)}</p>
        </div>
    );
}
