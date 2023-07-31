import { createSlice } from "@reduxjs/toolkit";
import initialState from '../../data/products'

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: { },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;