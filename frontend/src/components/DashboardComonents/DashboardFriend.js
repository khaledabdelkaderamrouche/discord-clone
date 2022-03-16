import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import FriendWrapper from "../shared/FriendWrapper";

const DashboardFriend = (props) => {
    return (
        <FriendWrapper >
            <Avatar src={require(`../../assets/avatars//${props.avatar}`)} sx={{ margin: "5px" }}/>
            {props.user}
        </FriendWrapper>

    );
};

DashboardFriend.propTypes = {
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};
export default DashboardFriend;
