import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ContentItem from "../../ContentItem";
import s from "./s.module.css";
import FiltersComponent from "../../FiltersComponent";
import { Context } from "../../../context";

export default function ProductsPage({ products, categories }) {
    const { category_title } = useParams();
    const { searchUtoli, setSearchUtoli } = useContext(Context);

    let processed_products = products;

    if (category_title !== undefined) {
        const { id } = categories.find((el) => el.category_title === category_title);
        processed_products = products.filter((el) => el.category === id);
        setSearchUtoli("");
    } else if (searchUtoli) {
        processed_products = products.filter(({ show }) => Object.values(show).every((item) => item));
    }


    return (
        <>
            <FiltersComponent />
            <div className={s.productsPage_wrap}>
                {processed_products.map((item) => (
                    <ContentItem key={item.id} {...item} />
                ))}
            </div>
        </>
    );
}
