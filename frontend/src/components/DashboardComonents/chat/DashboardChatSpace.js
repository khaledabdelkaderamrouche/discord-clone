import React from "react";
import Box from "@mui/material/Box";
import DashboardChatSpaceInput from "./DashboardChatSpaceInput";
import DashboardChatConversationSpace from "./DashboardChatConversationSpace";
import DashboardChatHeaderSpace from "./DashboardChatHeaderSpace";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const DashboardChatSpace = (props) => {
    const chat = useSelector((state) => state.chat.value);
    const loadedMessages = chat.loadedMessages;
    const activeConversation = chat.activeConversation;
    const conversations = chat.conversations;
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "100%"
            }}
        >
            <DashboardChatHeaderSpace theme={props.theme} activeConversation={activeConversation?.username} />
            <DashboardChatConversationSpace theme={props.theme} loaded={loadedMessages} conversations={conversations}/>
            <DashboardChatSpaceInput theme={props.theme} activeConversation={ activeConversation?.userMail } />
        </Box>
    );
};
DashboardChatSpace.propTypes = {
    theme: PropTypes.object.isRequired
};
export default DashboardChatSpace;
