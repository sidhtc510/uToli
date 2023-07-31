import React from "react";
import s from "./s.module.css";

export default function ContentItem({ id, title, description, category_id, image, price }) {
    return (
        <div className={s.contentItem_item}>
            <h4>{title}</h4>
            <img src={image} alt={title} />
            <div>{price}</div>
        </div>
    );
}
