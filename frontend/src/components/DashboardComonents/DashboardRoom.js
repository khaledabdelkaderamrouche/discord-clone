import React from "react";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import { hashCode } from "../../utils/manipulations";

function stringToColor (string) {
    console.log(hashCode(string));
    return hashCode(string);
}
function stringAvatar (name) {
    const names = name.split(" ");
    return {
        sx: {
            width: "70px",
            height: "70px",
            backgroundColor: stringToColor(name)
        },
        children: `${names.map((names) => names[0]).join("")}`
    };
}
const DashboardRoom = (props) => {
    console.log(stringAvatar(props.user));
    return (
        <Avatar {...stringAvatar(props.user)} variant={"rounded"}/>
    );
};

DashboardRoom.propTypes = {
    user: PropTypes.string.isRequired
};
export default DashboardRoom;
