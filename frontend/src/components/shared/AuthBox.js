import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

const BoxWrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    background: "#a29bfe",
    overflow: "scroll"
});

const AuthBox = (props) => {
    return (
        <BoxWrapper>
            <Box
                sx={{
                    width: 700,
                    height: "65vh",
                    background: "#6c5ce7",
                    borderRadius: "5px",
                    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "25px",
                    color: "white"
                }}
            >
                {props.children}
            </Box>
        </BoxWrapper>
    );
};
AuthBox.propTypes = {
    children: PropTypes.any
};

export default AuthBox;
