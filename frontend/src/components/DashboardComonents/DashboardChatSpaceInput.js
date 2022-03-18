import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

const InputWrapper = styled("div")({
    height: "28vh",
    width: "100%",
    textAlign: "left",
    flexGrow: 1
});
const DashboardChatSpaceInput = (props) => {
    return (
        <InputWrapper sx={{
            border: "1px inset " + props.theme.textColor1
        }}>
            <TextField
                id="standard-multiline-static"
                multiline
                fullWidth
                color={"success"}
                rows={4}
                variant="standard"
                sx={{
                    padding: "15px",
                    textarea: { color: props.theme.textColor1 },
                    fontSize: "16px",
                    margin: "0"
                }}
            />
        </InputWrapper>

    );
};
DashboardChatSpaceInput.propTypes = {
    theme: PropTypes.object.isRequired
};
export default DashboardChatSpaceInput;
