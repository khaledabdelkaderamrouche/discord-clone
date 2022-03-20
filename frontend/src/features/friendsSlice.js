import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { displayAlert } from "./alertSlice";
import { handleResponse } from "../utils/ErrorHandler";

const initialState = {
    friends: [
    ],
    pendingInvitations: [
    ]
};

export const friendsSlice = createSlice({

    name: "friends",
    initialState: { value: initialState },
    reducers: {
        getFriendsSuccess: (state, action) => {
            state.value = action.payload;
        },
        getPendingInvitationsSuccess: (state, action) => {
            console.log(action.payload);
            state.value.pendingInvitations = action.payload;
        },
        sendInvitationSuccess: (state, action) => {
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
export const { getFriendsSuccess, sendInvitationSuccess, getPendingInvitationsSuccess } = friendsSlice.actions;
export default friendsSlice.reducer;

export const getFriends = (data) => async (dispatch) => {
    try {
        const response = await api.getFriends(data);
        if (response.error) {
            const options = { ...handleResponse(response), ...{ filled: true } };
            dispatch(displayAlert({
                open: true,
                options: options
            }));
        } else {
            dispatch(getFriendsSuccess(response.data));
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

export const getPendingInvitations = (data) => async (dispatch) => {
    try {
        const response = await api.getPendingInvitations(data);

        if (!response.error) {
            dispatch(getPendingInvitationsSuccess(response.data.invitations));
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
export const sendInvitation = (data) => async dispatch => {
    try {
        const response = await api.sendInvitation(data);
        const options = { ...handleResponse(response), ...{ filled: true } };
        dispatch(displayAlert({
            open: true,
            options: options
        }));
        return true;
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
