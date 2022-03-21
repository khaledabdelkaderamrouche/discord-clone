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
            state.value.friends = action.payload;
        },
        getPendingInvitationsSuccess: (state, action) => {
            state.value.pendingInvitations = action.payload;
        },
        sendInvitationSuccess: (state, action) => {
        },
        acceptInvitationSuccess: (state, action) => {
            state.value.friends = action.payload.friends;
            state.value.pendingInvitations = action.payload.invitations;
        }

    }
});
export const { getFriendsSuccess, sendInvitationSuccess, getPendingInvitationsSuccess, acceptInvitationSuccess } = friendsSlice.actions;
export default friendsSlice.reducer;

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
export const getFriends = (data) => async (dispatch) => {
    try {
        const response = await api.getFriends(data);

        if (!response.error) {
            dispatch(getFriendsSuccess(response.data.friends));
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
export const acceptInvitation = (data) => async dispatch => {
    try {
        const response = await api.acceptInvitation(data);
        if (response.error) {
            const options = { ...handleResponse(response), ...{ filled: true } };
            dispatch(displayAlert({
                open: true,
                options: options
            }));
        } else {
            console.log(response.data);
            console.log(response.data.friends);
            dispatch(acceptInvitationSuccess(response.data));
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
