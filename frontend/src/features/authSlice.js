import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { displayAlert } from "./alertSlice";

const initialState =
    localStorage.getItem("userDetails")
        ? JSON.parse(localStorage.getItem("userDetails"))
        : {};

export const authSlice = createSlice({

    name: "auth",
    initialState: { value: initialState },
    reducers: {
        loginSuccess: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("userDetails", JSON.stringify(action.payload));
        },
        logout: async (state, action) => {
            state.value = null;
            localStorage.removeItem("userDetails");
        },
        registerSuccess: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("userDetails", JSON.stringify(action.payload));
        }

    }
});
export const { loginSuccess, logout, registerSuccess } = authSlice.actions;
export default authSlice.reducer;

export const login = (data) => async (dispatch) => {
    try {
        const response = await api.login(data);
        if (response.error) {
            console.log(response)
            dispatch(displayAlert({
                open: true,
                options: {
                    text: response.message.message,
                    title: response.message.code,
                    severity: "error",
                    filled: true
                }
            }));
        } else {
            dispatch(loginSuccess(response.data));
        }
    } catch (e) {
        dispatch(displayAlert({
            open: true,
            options: {
                text: e.message,
                severity: "error",
                filled: true
            }
        }));
        return console.error(e.message);
    }
};
export const register = (data) => async dispatch => {
    try {
        const response = await api.register(data);
        if (response.error) {
            dispatch(displayAlert({
                open: true,
                options: {
                    text: response.message.message,
                    title: response.message.code,
                    severity: "error",
                    filled: true
                }
            }));
        } else {
            dispatch(registerSuccess(response.data));
        }
    } catch (e) {
        dispatch(displayAlert({
            open: true,
            options: {
                text: e.message,
                severity: "error",
                filled: true
            }
        }));
        return console.error(e.message);
    }
};
