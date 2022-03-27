import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { displayAlert } from "./alertSlice";
import { useSelector } from "react-redux";

const initialState = {
    activeConversation: null,
    conversations: [],
    loadedMessages: false
};

export const chatSlice = createSlice({

    name: "chat",
    initialState: { value: initialState },
    reducers: {
        setActiveConversation: (state, action) => {
            state.value.activeConversation = action.payload;
        },
        getConversationsSuccess: (state, action) => {
            state.value.conversations = action.payload;
            state.value.loadedMessages = true;
        },
        sendMessageSuccess: (state, action) => {
            state.value.conversations.push(action.payload);
        }

    }
});
export const getConversations = (data) => async (dispatch) => {
    try {
        const response = await api.getConversations(data);

        if (!response.error) {
            dispatch(getConversationsSuccess(response.data));
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
export const sendMessage = (data) => async (dispatch) => {
    try {
        const user = JSON.parse(localStorage.getItem("userDetails")).userDetails;
        const response = await api.sendMessage(data);
        if (!response.error) {
            const conversation = {
                avatar: user.avatar,
                username: user.username,
                content: data.content,
                timestamp: new Date(Date.now()).toISOString(),
                right: true
            };
            dispatch(sendMessageSuccess(conversation));
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
    setActiveConversation,
    getConversationsSuccess,
    sendMessageSuccess
} = chatSlice.actions;
export default chatSlice.reducer;
