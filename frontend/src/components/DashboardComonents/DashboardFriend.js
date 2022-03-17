import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { WrapperFriends } from "../shared/Wrappers";

const DashboardFriend = (props) => {
    return (
        <WrapperFriends >
            <Avatar src={require(`../../assets/avatars//${props.avatar}`)} sx={{ margin: "5px" }}/>
            {props.user}
        </WrapperFriends>

    );
};

DashboardFriend.propTypes = {
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};
export default DashboardFriend;
