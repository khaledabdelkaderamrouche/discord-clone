import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CustomAddButton = ({ additionalStyles, disabled, onClick }) => {
    return (

        <IconButton aria-label="Add Room"
            disabled={disabled}
            onClick={onClick}
            sx={{ marginBottom: "15px", ...additionalStyles }}>
            <AddCircleIcon
                style={additionalStyles || {}}
                sx={{ fontSize: "60px" }}/>
        </IconButton>
    );
};
CustomAddButton.propTypes = {
    additionalStyles: PropTypes.object,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CustomAddButton;
