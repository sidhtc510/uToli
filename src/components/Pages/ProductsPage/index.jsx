import React from "react";
import { useParams } from "react-router-dom";
import ContentItem from "../../ContentItem";
import s from "./s.module.css";

export default function ProductsPage({ products, categories }) {
    const { category_title } = useParams();
    const { id } = categories.find((el) => el.category_title === category_title);

    const products_by_category = products.filter((el) => el.category_id === id);

    return (
        <div className={s.productsPage_wrap}>
            {" "}
            {products.map((item) => (
                <ContentItem key={item.id} {...item} />
            ))}
        </div>
    );
}
