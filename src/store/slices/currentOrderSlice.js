import { createSlice } from "@reduxjs/toolkit";
const myConsole = (data) => {
    const stateStringify = JSON.stringify(data);
    console.log(JSON.parse(stateStringify));
};

const read = () => {
    return JSON.parse(localStorage.getItem("currentOrder")) ?? [];
};
const write = (data) => {
    localStorage.setItem("currentOrder", JSON.stringify(data));
};


const checkProduct = (state, payload) => {
    const target = state.list.find((el) => el.id === payload.id);

    if (target) {
        target.count++;
    } else {
        state.list.unshift({ ...payload, count: 1 });
    }
    write(state.list);
};

const incrementInReducer = (state, payload) => {
    const target = state.list.find((el) => el.id === payload);
    target.count++;
    write(state.list);
};

const decrementInReducer = (state, payload) => {
    const target = state.list.find((el) => el.id === payload);
    if (target.count === 1) {
        state.list.filter((el) => el.id !== payload);
    } else {
        target.count--;
    }
    write(state.list);
};


export const currentOrderSlice = createSlice({
    name: "currentOrder",
    initialState: {list:read()},
    reducers: {
        addAction(state, action) {
            checkProduct(state, action.payload);
        },
        incrAction(state, action) {
            incrementInReducer(state, action.payload);
        },
        decrAction(state, action) {
            decrementInReducer(state, action.payload);
        },
        deleteAction(state, action) {
            state.list = state.list.filter((el) => el.id !== action.payload);
            write(state.list);
        },
        clearAction(state){
            state.list = []
            write(state.list);
        }
    },
});

export const {addAction, incrAction, decrAction, deleteAction, clearAction} = currentOrderSlice.actions;

export default currentOrderSlice.reducer;
