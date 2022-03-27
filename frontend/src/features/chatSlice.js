import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/api";
import { displayAlert } from "./alertSlice";

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
export const {
    setActiveConversation,
    getConversationsSuccess
} = chatSlice.actions;
export default chatSlice.reducer;
