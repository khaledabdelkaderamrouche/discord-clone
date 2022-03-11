import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const AuthHeader = (props) => {
    return (
        <>
            <Typography variant="h3" sx={{ color: "#fff", textAlign: "center" }}>{props.header}</Typography>
            <Typography variant='h4' sx={{ color: "#fff", textAlign: "center" }}>{props.subHeader}</Typography>
        </>
    );
};
AuthHeader.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired
};

export default AuthHeader;
