import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../features/chatSlice";
import { validateMail, validatePassword } from "../../../utils/Validators";

const InputWrapper = styled("div")({
    height: "28vh",
    width: "99%",
    textAlign: "left",
    flexGrow: 1,
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start"
});
const DashboardChatSpaceInput = (props) => {
    const [content, setContent] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setIsFormValid(content.length > 5);
    }, [content]);
    const handleValueChange = (event) => {
        setContent(event.target.value);
    };
    const handleClick = () => {
        setContent("");
        dispatch(sendMessage({ receiverMail: props.activeConversation, content: content }));
    };

    return (
        <InputWrapper sx={{
            border: "1px inset " + props.theme.textColor1
        }}>
            <TextField
                id="standard-multiline-static"
                multiline
                color={"success"}
                rows={2}
                variant="standard"
                value={content}
                onChange={handleValueChange}

                sx={{
                    padding: "15px",
                    textarea: { color: props.theme.textColor1 },
                    fontSize: "16px",
                    margin: "5px",
                    width: "95%"
                }}
            />
            <Button variant="outlined"
                endIcon={<SendIcon />}
                onClick={handleClick}
                disabled={!isFormValid}
                sx={{
                    margin: "15px",
                    width: "95%"
                }}
            >
                Send
            </Button>

        </InputWrapper>

    );
};
DashboardChatSpaceInput.propTypes = {
    theme: PropTypes.object.isRequired,
    activeConversation: PropTypes.string
};
export default DashboardChatSpaceInput;
