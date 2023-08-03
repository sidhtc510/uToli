import React from "react";
import s from "./s.module.css";
export default function Grid({ children, className, ...props }) {
    props.className = [s.wrapper, className].join(" ");
    
    return <div {...props}>{children}</div>;
}
