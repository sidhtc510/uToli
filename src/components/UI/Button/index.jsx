import React from "react";
import s from "./s.module.css";

export default function Button({ children, className, ...props }) {
    
    props["className"] = [s.button, className].join(" ");

    return <button {...props}>{children}</button>;
}