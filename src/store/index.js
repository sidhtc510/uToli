import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import currentOrderReducer from "./slices/currentOrderSlice";
import orderHistoryReducer from "./slices/orderHistorySlice";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        currentOrder: currentOrderReducer,
        orderHistory: orderHistoryReducer
    },
});
