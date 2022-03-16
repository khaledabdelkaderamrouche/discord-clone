import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import RedirectInfo from "../shared/RedirectInfo";
import DashboardChatSpaceInput from "./DashboardChatSpaceInput";

const DashboardChatConversationSpace = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: "#fff",
                color: "white",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flexGrow: 1
            }}
        >
        </Box>
    );
};

export default DashboardChatConversationSpace;
