import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomPrimaryButton = ({ label, additionalStyles, disabled, onClick }) => {
    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: "#dfe6e9",
                color: "#2d3436",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                width: "100%",
                height: "40px",
                "&:hover": {
                    backgroundColor: "#2d3436",
                    border: "1px solid #dfe6e9",
                    color: "#dfe6e9",
                    boxShadow: "0px 2px 5px 3px rgba(255,255,255,1)"
                }

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
