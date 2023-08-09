import React from "react";
import s from "./s.module.css";
export default function Grid({ children, className, ...props }) {
    props.className = [s.wrapper, className].join(" ");
    console.log(    props.className);
    return <div {...props}>{children}</div>;
}
