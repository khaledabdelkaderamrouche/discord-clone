import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomPrimaryButton = ({label, additionalStyles, disabled, onClick}) => {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: "#5865F2",
                color: "#fff",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                width: "100%",
                height: "40px"
            }}
            style={additionalStyles || {}}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};
CustomPrimaryButton.propTypes = {
    additionalStyles: PropTypes.object,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string
};

export default CustomPrimaryButton;
