import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MaterialUISwitch from "./MaterialUiSwitch";
import { useDispatch } from "react-redux";
import { enableDarkMode, enableLightMode } from "../../features/themeSlice";
import PropTypes from "prop-types";
import DashboardRoomsBar from "./DashboardRoomsBar";
import { logout } from "../../features/authSlice";

const DashboardAppBar = (theme) => {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const switchHandler = (event) => {
        if (event.target.checked) { dispatch(enableDarkMode()); } else { dispatch(enableLightMode()); }
    };
    const handleLogout = () => {
        dispatch(logout());
    };
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

                    <IconButton
                        sx={{
                            color: theme.textColor1
                        }}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </FormGroup>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    sx={{
                        "& .MuiPaper-root": {
                            backgroundColor: theme.backgroundColor,
                            color: theme.textColor1
                        }
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};
DashboardRoomsBar.propTypes = {
    theme: PropTypes.object.isRequired
};
export default DashboardAppBar;
