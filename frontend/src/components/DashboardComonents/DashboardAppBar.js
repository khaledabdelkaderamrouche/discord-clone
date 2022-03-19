import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MaterialUISwitch from "./MaterialUiSwitch";
import { useDispatch } from "react-redux";
import { enableDarkMode, enableLightMode } from "../../features/themeSlice";
import PropTypes from "prop-types";
import { logout } from "../../features/authSlice";
import FriendsBadge from "./friends/FriendsBadge";
import ProfileIcon from "./ProfileIcon";

const DashboardAppBar = (props) => {
    const dispatch = useDispatch();

    const switchHandler = (event) => {
        if (event.target.checked) { dispatch(enableDarkMode()); } else { dispatch(enableLightMode()); }
    };
    const handleLogout = () => {
        dispatch(logout());
    };
    return (

        <AppBar position="static" sx={{
            backgroundColor: props.theme.backgroundColor,
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
                            color: props.theme.textColor1
                        }}
                        control={<MaterialUISwitch value={ true } />}
                        label="Dark Mode"
                        checked={props.theme.darkMode}
                        onChange={switchHandler}
                    />
                    <FriendsBadge
                        theme={props.theme}
                        color={props.theme.textColor1}
                        content={props.userPendingInvitations.length}
                        max={99}
                        invisible={props.userPendingInvitations.length <= 0}
                        handleAccept={handleLogout}
                        handleReject={handleLogout}
                        invitations={[]}
                    />
                    <ProfileIcon theme={props.theme} handleLogout={handleLogout}/>
                </FormGroup>
            </Toolbar>
        </AppBar>
    );
};
DashboardAppBar.propTypes = {
    theme: PropTypes.object.isRequired,
    userPendingInvitations: PropTypes.object.isRequired
};
export default DashboardAppBar;
