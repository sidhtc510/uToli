import React from "react";
import s from "./s.module.css";
export default function Grid({ children }) {
    return <div className={s.wrapper}>{children}</div>;
}
