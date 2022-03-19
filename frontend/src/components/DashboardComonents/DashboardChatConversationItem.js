import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { WrapperLeft, WrapperRight } from "../shared/Wrappers";

const MsgTime = (props, color) => {
    return (
        <Typography
            sx={{ color: color, textAlign: "left", fontSize: "x-small", fontStyle: "italic" }}
            style={props.additionalStyles || {}}
            variant="caption"
        >
            {props.children}
        </Typography>
    );
};
const UserName = (props, color) => {
    return (
        <Typography
            sx={{ color: color, margin: "15px", textAlign: "left" }}
            style={props.additionalStyles || {}}
            variant="subtitle2"
        >
            {props.children}
        </Typography>
    );
};
const UserText = (props, color) => {
    return (
        <Typography
            sx={{ color: color, margin: "15px", textAlign: "left" }}
            style={props.additionalStyles || {}}
            variant="subtitle2"
        >
            {props.children}
        </Typography>
    );
};
const DashboardChatConversationItem = (props) => {
    const color1 = props.theme.textColor1;
    const color2 = props.theme.textColor2;
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100%",
                height: "auto"
            }}
        >
            {
                props.position === "right"
                    ? (
                        <>
                            <WrapperRight>
                                <Avatar src={require(`../../assets/avatars/${props.avatar}`)} sx={{ margin: "5px" }}/>
                                <UserName color1={color1}>{props.user}</UserName>
                                <MsgTime color={color2}>{props.dateTime}</MsgTime>
                            </WrapperRight>
                            <UserText color1={color1}>{props.children}</UserText>
                        </>
                    )
                    : (
                        <>
                            <WrapperLeft>
                                <Avatar src={require(`../../assets/avatars/${props.avatar}`)} sx={{ margin: "5px" }}/>
                                <UserName color1={color1}>{props.user}</UserName>
                                <MsgTime color={color2}>{props.dateTime}</MsgTime>
                            </WrapperLeft>
                            <UserText color1={color1}>{props.children}</UserText>
                        </>
                    )
            }
        </Box>
    );
};
DashboardChatConversationItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    user: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    position: PropTypes.oneOf(["left", "right"]).isRequired,
    children: PropTypes.any
};
MsgTime.propTypes = {
    children: PropTypes.any,
    additionalStyles: PropTypes.object
};
UserName.propTypes = {
    children: PropTypes.any,
    additionalStyles: PropTypes.object
};

UserText.propTypes = {
    children: PropTypes.any,
    additionalStyles: PropTypes.object
};
export default DashboardChatConversationItem;
