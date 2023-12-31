import { createSlice } from "@reduxjs/toolkit";
// const myConsole = (data) => {
//     const stateStringify = JSON.stringify(data);
//     console.log(JSON.parse(stateStringify));
// };

const read = () => {
    return JSON.parse(localStorage.getItem("orderHistory")) ?? { list: [] };
};
const write = (data) => {
    localStorage.setItem("orderHistory", JSON.stringify(data));
};

const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState: read(),

    reducers: {
        addAction(state, { payload }) {
            state.list.unshift({
                id: Date.now(),
                date: new Date(),
                // content: payload.list.map((item) => ({ count: item.count, id: item.id, name: item.name, price: item.price })),
                content: payload.list.map((item) => ({ ...item })),
                orderAmount: payload.orderAmount,
                show: { search: true, date: true },
            });
            write(state);
            // myConsole(state);
        },
        dateFilterAction(state, { payload }) {
            state.list = state.list.map((item) => ({
                ...item,
                show: { search: true, date: new Date(item.date).toISOString().split("T")[0] === payload },
            }));
            // myConsole(state);
            write(state);
        },
        clearFilter(state) {
            state.list = state.list.map((item) => ({
                ...item,
                show: { search: true, date: true },
            }));
            write(state);
        },
    },
});

export const { addAction, dateFilterAction, clearFilter } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
