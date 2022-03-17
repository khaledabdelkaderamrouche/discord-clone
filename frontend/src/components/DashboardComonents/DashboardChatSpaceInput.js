import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const InputWrapper = styled("div")({
    height: "28vh",
    width: "100%",
    boxShadow: "4px 1px 5px 1px rgba(210, 218, 226,0.1)",
    textAlign: "left",
    flexGrow: 1
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
