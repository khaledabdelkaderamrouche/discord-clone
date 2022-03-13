import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { displayAlert } from "./alertSlice";
import { handleResponse } from "../utils/ErrorHandler";

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
            window.location.pathname = "/login";
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
            const options = { ...handleResponse(response), ...{ filled: true } };
            dispatch(displayAlert({
                open: true,
                options: options
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
            console.log(response);
            const options = { ...handleResponse(response), ...{ filled: true } };
            dispatch(displayAlert({
                open: true,
                options: options
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
