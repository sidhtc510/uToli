import React, { useContext } from "react";
import s from "./s.module.css";
import OredredProductsContainer from "./OredredProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../context";
import { addAction } from "../../store/slices/orderHistorySlice";
import { clearAction } from "../../store/slices/currentOrderSlice";
export default function CurrentOrder({ ...props }) {
    const dispatch = useDispatch();
    const { setAmount } = useContext(Context);

    const products = useSelector(({ products }) => products);
    const currentOrder = useSelector((state) => state.currentOrder.list);

    const result = currentOrder.map((item) => {
        const product = products.find(({ id }) => id === item.id);
        return { ...product, ...item };
    });

    setAmount(result.reduce((acc, el) => acc + el.price * el.count, 0).toFixed(2));

    const settling = () => {
        dispatch(addAction(result));
        dispatch(clearAction())
    };

    return (
        <div className={s.currentOrder} {...props}>
            <h1 onClick={settling}>settling order</h1>
            <h2>Current order</h2>
            <OredredProductsContainer products={result} />
        </div>
    );
}
