import React from "react";
import img from "./coffee.png";
export default function MainPage() {
    const wrapStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100%"
    };
    return (
        <div style={wrapStyle}>
            <img style={{ width: "300px" }} src={img} alt="" />
        </div>
    );
}
