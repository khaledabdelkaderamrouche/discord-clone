import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MaterialUISwitch from "./MaterialUiSwitch";
import { useDispatch, useSelector } from "react-redux";
import { enableDarkMode, enableLightMode } from "../../features/themeSlice";
import PropTypes from "prop-types";
import DashboardRoomsBar from "./DashboardRoomsBar";
import { logout } from "../../features/authSlice";
import FriendsBadge from "./friends/FriendsBadge";
import ProfileIcon from "./ProfileIcon";

const DashboardAppBar = (theme) => {
    const dispatch = useDispatch();

    const switchHandler = (event) => {
        if (event.target.checked) { dispatch(enableDarkMode()); } else { dispatch(enableLightMode()); }
    };
    const handleLogout = () => {
        dispatch(logout());
    };
    const friends = useSelector((state) => state.friends.value);
    console.log(friends.pendingInvitations.length);
    return (

        <AppBar position="static" sx={{
            backgroundColor: theme.backgroundColor,
            borderBottom: "1px solid #485460",
            display: "flex",
            flexDirection: "row-reverse"
        }}>
            <Toolbar>
                <FormGroup sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <FormControlLabel
                        sx={{
                            color: theme.textColor1
                        }}
                        control={<MaterialUISwitch value={ true } />}
                        label="Dark Mode"
                        checked={theme.darkMode}
                        onChange={switchHandler}
                    />
                    <FriendsBadge theme={theme} color={theme.textColor1} content={friends.pendingInvitations.length} max={99} invisible={friends.pendingInvitations.length <= 0} handleAccept={handleLogout} handleReject={handleLogout} invitations={[
                        {
                            username: "Khaled Amrouche",
                            avatar: "64_8.png"
                        },
                        {
                            username: "Khaled Amrouche",
                            avatar: "64_8.png"
                        },
                        {
                            username: "Khaled",
                            avatar: "64_8.png"
                        },
                        {
                            username: "Khaled Adekader Amrouche",
                            avatar: "64_8.png"
                        }
                    ]}/>
                    <ProfileIcon theme={theme} handleLogout={handleLogout}/>
                </FormGroup>
            </Toolbar>
        </AppBar>
    );
};
DashboardRoomsBar.propTypes = {
    theme: PropTypes.object.isRequired
};
export default DashboardAppBar;
