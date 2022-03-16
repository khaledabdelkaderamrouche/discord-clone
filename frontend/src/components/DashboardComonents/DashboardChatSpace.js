import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import RedirectInfo from "../shared/RedirectInfo";
import DashboardChatSpaceInput from "./DashboardChatSpaceInput";
import DashboardChatConversationSpace from "./DashboardChatConversationSpace";
import DashboardChatHeaderSpace from "./DashboardChatHeaderSpace";

const DashboardChatSpace = (props) => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                background: "#1e272e",
                color: "white",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <DashboardChatHeaderSpace/>
            <DashboardChatConversationSpace/>
            <DashboardChatSpaceInput/>
        </Box>
    );
};

export default DashboardChatSpace;
