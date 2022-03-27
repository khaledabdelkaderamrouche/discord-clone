import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import RedirectInfo from "../../shared/RedirectInfo";

const DashboardChatHeaderSpace = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "5vh",
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start"
            }}
        >
            <RedirectInfo text={props.activeConversation ? `This is your conversation with ${props.activeConversation}` : "Select a friend to start a conversation"} additionalStyles={{ fontSize: "large", color: props.theme.textColor1 }} />
        </Box>
    );
};

DashboardChatHeaderSpace.propTypes = {
    theme: PropTypes.object.isRequired,
    activeConversation: PropTypes.string
};
export default DashboardChatHeaderSpace;
