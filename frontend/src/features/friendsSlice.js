import { createSlice, current } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { displayAlert } from "./alertSlice";
import { handleResponse } from "../utils/ErrorHandler";

const initialState = {
    friends: [
    ],
    pendingInvitations: [
    ],
    loadedFriends: false
};

export const friendsSlice = createSlice({

    name: "friends",
    initialState: { value: initialState },
    reducers: {
        getFriendsSuccess: (state, action) => {
            state.value.friends = action.payload;
            state.value.loadedFriends = true;
        },
        updateFriendsSuccess: (state, action) => {
            state.value.friends.push(action.payload);
        },
        updateFriendsStatusSuccess: (state, action) => {
            const onlineUsers = action.payload;
            const friends = state.value.friends;
            const resultFriends = [];
            // TODO THINK OF A CLEANER WAY INSTEAD OF DELETE
            friends.forEach((friend) => {
                if (onlineUsers.includes(friend._id)) {
                    resultFriends.push({ online: true, ...friend });
                } else {
                    delete friend.online;
                    resultFriends.push({ ...friend });
                }
            });
            state.value.friends = resultFriends;
        },
        getPendingInvitationsSuccess: (state, action) => {
            state.value.pendingInvitations = action.payload;
        },
        getPendingInvitationSuccess: (state, action) => {
            state.value.pendingInvitations.push(action.payload);
        },
        sendInvitationSuccess: (state, action) => {
        },
        acceptInvitationSuccess: (state, action) => {
            state.value.friends = action.payload.friends;
            state.value.pendingInvitations = action.payload.pendingInvitations;
        },
        declineInvitationSuccess: (state, action) => {
            state.value.pendingInvitations = action.payload;
        }

    }
});
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
export const getPendingInvitation = (data) => async (dispatch) => {
    const { pendingInvitation } = data;
    dispatch(getPendingInvitationSuccess(pendingInvitation));
};
export const updateFriends = (data) => async (dispatch) => {
    const { friend } = data;
    dispatch(updateFriendsSuccess(friend));
};
export const updateFriendsStatus = (data) => async (dispatch) => {
    const { onlineUsers } = data;
    dispatch(updateFriendsStatusSuccess(onlineUsers));
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
export const declineInvitation = (data) => async dispatch => {
    try {
        const response = await api.declineInvitation(data);
        if (response.error) {
            const options = { ...handleResponse(response), ...{ filled: true } };
            dispatch(displayAlert({
                open: true,
                options: options
            }));
        } else {
            dispatch(declineInvitationSuccess(response.data.pendingInvitations));
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
export const {
    getFriendsSuccess,
    sendInvitationSuccess,
    getPendingInvitationsSuccess,
    acceptInvitationSuccess,
    declineInvitationSuccess,
    getPendingInvitationSuccess,
    updateFriendsSuccess,
    updateFriendsStatusSuccess
} = friendsSlice.actions;
export default friendsSlice.reducer;
