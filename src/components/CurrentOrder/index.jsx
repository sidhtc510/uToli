import React from "react";
import s from "./s.module.css";
import OredredProductsContainer from "./OredredProductsContainer";

export default function CurrentOrder({ result, ...props }) {
    return (
        <div className={s.currentOrder} {...props}>
            <h2>Current order</h2>
            <OredredProductsContainer products={result} />
        </div>
    );
}
