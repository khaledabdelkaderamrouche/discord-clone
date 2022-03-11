import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: { value: initialState },
    reducers: {
        authAction: (state, action) => {
            state.value = action.payload;
        }
    }
});

export default authSlice.reducers;
