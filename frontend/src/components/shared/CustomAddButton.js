import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CustomAddButton = ({ additionalStyles, disabled, onClick }) => {
    return (

        <IconButton aria-label="Add Room"
            style={additionalStyles || {}}
            disabled={disabled}
            onClick={onClick}
            sx={{
                border: "1px solid #1e272e",
                marginBottom: "15px",
                "&:hover": {
                    backgroundColor: "#1e272e",
                    border: "1px solid white"
                }
            }}>
            <AddCircleIcon sx={{
                fontSize: "60px",
                color: "white"
            }}/>
        </IconButton>
    );
};
CustomAddButton.propTypes = {
    additionalStyles: PropTypes.object,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CustomAddButton;
