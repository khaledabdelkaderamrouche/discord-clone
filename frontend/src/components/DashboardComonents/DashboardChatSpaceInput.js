import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
const InputWrapper = styled("div")({
    color: "#fff",
    height: "20vh",
    width: "100%",
    backgroundColor: "#1e272e",
    boxShadow: "1px 1px 3px 1px rgba(210, 218, 226,0.1)",
    textAlign: "left",
    overflow: "scroll"
});
const DashboardChatSpaceInput = (props) => {
    return (
        <InputWrapper>
            <TextField
                id="standard-multiline-static"
                multiline
                fullWidth
                color={"success"}
                rows={4}
                variant="standard"
                sx={{
                    padding: "15px",
                    textarea: { color: "#fff" },
                    fontSize: "16px",
                    margin: "0"
                }}
            />
        </InputWrapper>

    );
};

export default DashboardChatSpaceInput;
