import { createSlice } from "@reduxjs/toolkit";
// const myConsole = (data) => {
//     const stateStringify = JSON.stringify(data);
//     console.log(JSON.parse(stateStringify));
// };

const read = () => {
    return JSON.parse(localStorage.getItem("orderHistory")) ?? [];
};
const write = (data) => {
    localStorage.setItem("orderHistory", JSON.stringify(data));
};

export const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState: { list: read() },
    reducers: {
        addAction(state, { payload }) {
            state.list.push({ id: Date.now(), date: new Date(), content: payload.map((item) => ({ count: item.count, id: item.id, name: item.name, price: item.price })) });
            write(state.list);
        },
    },
});

export const { addAction } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
