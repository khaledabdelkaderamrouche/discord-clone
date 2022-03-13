import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    options: {
        text: "",
        title: "",
        severity: "info",
        filled: false
    }
};

export const alertSlice = createSlice({
    name: "alert",
    initialState: { value: initialState },
    reducers: {
        displayAlert: (state, action) => {
            state.value = action.payload;
        },
        closeAlert: (state, action) => {
            state.value = initialState;
        }
    }
});
export const { displayAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
