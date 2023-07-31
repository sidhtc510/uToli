import React from "react";
import s from "./s.module.css";
import Button from "../../../UI/Button";
import { BsTrash } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function OrderedItem({ id, title, description, category_id, image, price }) {
    return (
        <div className={s.orderedItem_item_wrap}>
            <p>
                5 X {title} ({price}) = {(price * 5).toFixed(2)}
            </p>
            <div>
                <Button>
                    <AiOutlineMinusCircle />
                </Button>
                <Button>
                    <AiOutlinePlusCircle />
                </Button>
                <Button>
                    <BsTrash />
                </Button>
            </div>
        </div>
    );
}
