import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { WrapperLeft, WrapperRight } from "../shared/Wrappers";

const MsgTime = (props) => {
    return (
        <Typography
            sx={{ color: "#808e9b", textAlign: "left", fontSize: "x-small", fontStyle: "italic" }}
            style={props.additionalStyles || {}}
            variant="caption"
        >
            {props.children}
        </Typography>
    );
};
const UserName = (props) => {
    return (
        <Typography
            sx={{ color: "#d2dae2", margin: "15px", textAlign: "left" }}
            style={props.additionalStyles || {}}
            variant="subtitle2"
        >
            {props.children}
        </Typography>
    );
};
const UserText = (props) => {
    return (
        <Typography
            sx={{ color: "#d2dae2", margin: "15px", textAlign: "left" }}
            style={props.additionalStyles || {}}
            variant="subtitle2"
        >
            {props.children}
        </Typography>
    );
};
const DashboardChatConversationItem = (props) => {
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
                                <Avatar src={require(`../../assets/avatars//${props.avatar}`)} sx={{ margin: "5px" }}/>
                                <UserName>{props.user}</UserName>
                                <MsgTime>{props.dateTime}</MsgTime>
                            </WrapperRight>
                            <UserText>{props.children}</UserText>
                        </>
                    )
                    : (
                        <>
                            <WrapperLeft>
                                <Avatar src={require(`../../assets/avatars//${props.avatar}`)} sx={{ margin: "5px" }}/>
                                <UserName>{props.user}</UserName>
                                <MsgTime>{props.dateTime}</MsgTime>
                            </WrapperLeft>
                            <UserText>{props.children}</UserText>
                        </>
                    )
            }
        </Box>
    );
};
DashboardChatConversationItem.propTypes = {
    avatar: PropTypes.string.isRequired,
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
