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
                alignItems: "center",
                justifyContent: "flex-start"
            }}
        >
            <RedirectInfo text={"You have 3/9 online friends"} additionalStyles={{ fontSize: "large", color: props.theme.textColor1 }} />
        </Box>
    );
};

DashboardChatHeaderSpace.propTypes = {
    theme: PropTypes.object.isRequired
};
export default DashboardChatHeaderSpace;
