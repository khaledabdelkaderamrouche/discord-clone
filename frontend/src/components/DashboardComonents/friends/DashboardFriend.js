import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { WrapperFriends } from "../../shared/Wrappers";

const DashboardFriend = (props) => {
    return (
        <WrapperFriends >
            <Avatar src={require(`../../../assets/avatars/${props.avatar}`)} sx={{ margin: "5px" }}/>
            <FiberManualRecordIcon sx={{
                position: "relative",
                top: "15px",
                left: "-25px",
                color: props.online ? "#2ecc71" : ""
            }}/>
            {props.user}
        </WrapperFriends>

    );
};

DashboardFriend.propTypes = {
    online: PropTypes.bool,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};
export default DashboardFriend;
