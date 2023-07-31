import React from "react";
import CategoryItem from "./CategoryItem";
import s from "./s.module.css";
export default function CategoryMenu({ categories, ...props }) {
    return (
        <div className={s.menuWrapper} {...props}>
            {categories.map((category) => (
                <CategoryItem key={category.id} {...category} />
            ))}
        </div>
    );
}
