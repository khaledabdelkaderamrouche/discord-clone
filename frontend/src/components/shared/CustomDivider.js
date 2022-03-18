import React from "react";
import PropTypes from "prop-types";
import { Divider } from "@mui/material";

const CustomDivider = (props) => {
    const { color } = props;
    return (
        <Divider flexItem={true} color={color} light={true} variant={"fullWidth"} sx={{ borderColor: { color }, marginBottom: "20px" }}/>
    );
};
CustomDivider.propTypes = {
    color: PropTypes.string.isRequired
};

export default CustomDivider;
