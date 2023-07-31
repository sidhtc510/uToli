import React from "react";
import { useParams } from "react-router-dom";


export default function CategoryPage() {
    const { category_id } = useParams();

    return (

            <div>CategoryPage {category_id}</div>

    );
}
