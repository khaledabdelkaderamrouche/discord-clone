import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import PropTypes from "prop-types";

const CustomAlert = ({ severity, title, text, outlined, filled, additionalStyles, open, handleClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{
                width: "50%"
            }}
        >
            <Alert
                onClose={handleClose}
                sx={{
                    width: "100%"
                }}
                severity={severity}
                variant={outlined ? "outlined" : filled ? "filled" : ""}
                style={additionalStyles || {}}
            >
                {title &&
                <AlertTitle>{title}</AlertTitle>
                }
                {text}
            </Alert>
        </Snackbar>
    )
    ;
};
CustomAlert.propTypes = {
    severity: PropTypes.oneOf(["info", "success", "warning", "error"]).isRequired,
    additionalStyles: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    outlined: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    filled: PropTypes.bool,
    handleClose: PropTypes.func.isRequired
};

export default CustomAlert;
