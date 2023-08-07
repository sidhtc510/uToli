import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../data/products";

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState.map((item) => ({
        ...item,
        show: { search: true },
    })),
    reducers: {
        searchAction(state, { payload }) {
            state.forEach((item) => {
                item.show.search = item.name.toLowerCase().includes(payload.toLowerCase());
            });
        },
        sortAction(state, { payload }) {
            ({
                id: () => state.sort((a, b) => a.id - b.id),
                priceAsc: () => state.sort((a, b) => a.price - b.price),
                priceDesc: () => state.sort((a, b) => b.price - a.price),
                name_az: () => state.sort((a, b) => a.name.localeCompare(b.name)),
                name_za: () => state.sort((a, b) => b.name.localeCompare(a.name)),
            })[payload]();
        },
    },
});

export const { searchAction, sortAction } = productsSlice.actions;

export default productsSlice.reducer;