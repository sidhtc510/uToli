import React from "react";
import { Link } from "react-router-dom";
import s from "./s.module.css";

export default function CategoryItem({ id, category_title }) {
    return (
        <Link to={`/products_category/${category_title}`}>
            <div className={s.categoryItemLink}>{category_title}</div>
        </Link>
    );
}
