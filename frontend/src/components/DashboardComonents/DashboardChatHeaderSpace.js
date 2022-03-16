import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import RedirectInfo from "../shared/RedirectInfo";

const DashboardChatHeaderSpace = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "5vh",
                width: "100%",
                backgroundColor: "#1e272e",
                color: "white",
                alignItems: "center",
                justifyContent: "flex-start"
            }}
        >
            <RedirectInfo text={"You have 3/9 online friends"} additionalStyles={{ fontSize: "large" }} />
        </Box>
    );
};

export default DashboardChatHeaderSpace;
