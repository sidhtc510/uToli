import React from "react";
import s from './s.module.css'
export default function Content({children, ...props}) {
    return <div {...props} className={s.content}>{children}</div>;
}
