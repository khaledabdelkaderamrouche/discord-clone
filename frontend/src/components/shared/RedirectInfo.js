import React from "react";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const RedirectText = styled("span")({
    color: "#fff",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "underline"
});
const RedirectInfo = ({
    text,
    redirectHandler,
    linkText,
    additionalStyles
}) => {
    return (
        <Typography
            sx={{ color: "#fff", margin: "15px", textAlign: "left" }}
            style={additionalStyles || {}}
            variant="subtitle2"
        >
            {text}
            <RedirectText onClick={redirectHandler}>
                {linkText}
            </RedirectText>
        </Typography>
    );
};
RedirectInfo.propTypes = {
    text: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    redirectHandler: PropTypes.func.isRequired,
    additionalStyles: PropTypes.object
};

export default RedirectInfo;
