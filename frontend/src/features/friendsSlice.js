import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { displayAlert } from "./alertSlice";
import { handleResponse } from "../utils/ErrorHandler";

const initialState = {
    friends: [
    ],
    pendingInvitations: [
        {
            username: "Khaled Amrouche",
            avatar: "64_8"
        },
        {
            username: "Khaled Amrouche",
            avatar: "64_8"
        },
        {
            username: "Khaled Amrouche",
            avatar: "64_8"
        },
        {
            username: "Khaled Amrouche",
            avatar: "64_8"
        }
    ]
};

export const friendsSlice = createSlice({

    name: "friends",
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
export const { loginSuccess, logout, registerSuccess } = friendsSlice.actions;
export default friendsSlice.reducer;

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
