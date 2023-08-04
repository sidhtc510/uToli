import { createSlice } from "@reduxjs/toolkit";
const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const read = () => {
    return JSON.parse(localStorage.getItem("orderHistory")) ?? [];
};
const write = (data) => {
    localStorage.setItem("orderHistory", JSON.stringify(data));
};

export const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState: read(),

    reducers: {
        addAction(state, { payload }) {
            state.unshift({
                id: Date.now(),
                date: new Date(),
                // content: payload.list.map((item) => ({ count: item.count, id: item.id, name: item.name, price: item.price })),
                content: payload.list.map((item) => ({ ...item })),
                orderAmount: payload.orderAmount,
            });
            write(state);
        },
    },
});

export const { addAction } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
