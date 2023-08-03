import React from "react";
import s from "./s.module.css";
import { useDispatch } from "react-redux";
import { addAction } from "../../store/slices/currentOrderSlice";


// id: "evan-williams-gourmet-mint-julep-mix-2-pack",
// img: "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
// name: "Evan Williams",
// dsc: "Evan Williams Gourmet Mint Julep Mix - 2 Pack",
// price: 39,
// rate: 4,
// country: "Louisville, KY",
// export default function ContentItem({ id, title, description, category_id, image, price }) {
export default function ContentItem({ id, name, dsc, img, price }) {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addAction({ id }));
    };

    return (
        <div className={s.contentItem_item} onClick={addToCart}>
            <h4>{name}</h4>
            <img src={img} alt={name} />
            <div>{price}</div>
        </div>
    );
}
