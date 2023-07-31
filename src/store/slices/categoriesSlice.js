import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        { id: 1, category_title: "Горячие напитки" },
        { id: 2, category_title: "Холодные напитки" },
        { id: 3, category_title: "Дессерты" },
        { id: 4, category_title: "Мороженное" },
    ],
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: { },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;