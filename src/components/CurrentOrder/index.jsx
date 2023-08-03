import React, { useContext } from "react";
import s from "./s.module.css";
import OredredProductsContainer from "./OredredProductsContainer";
import { useSelector } from "react-redux";
import { Context } from "../../context";
export default function CurrentOrder({ ...props }) {
    const { setAmount } = useContext(Context);

    const products = useSelector(({ products }) => products);
    const currentOrder = useSelector((state) => state.currentOrder.list);

    const result = currentOrder.map((item) => {
        const product = products.find(({ id }) => id === item.id);
        return { ...product, ...item };
    });

    setAmount(result.reduce((acc, el) => acc + el.price * el.count, 0).toFixed(2));

    return (
        <div className={s.currentOrder} {...props}>
            <h2>Current order</h2>
            <OredredProductsContainer products={result} />
        </div>
    );
}
