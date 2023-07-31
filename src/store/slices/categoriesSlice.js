import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, category_title: "Hot drinks" },
        { id: 2, category_title: "Cold drinks" },
        { id: 3, category_title: "Desserts" },
        { id: 4, category_title: "Ice Creams" },
    ],
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: { },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;