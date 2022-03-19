import IconButton from "@mui/material/IconButton";
import React from "react";
import PropTypes from "prop-types";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const MenuContainer = (props) => {
    const { handleLogout, anchorEl, theme, handleClose } = props;
    return (
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
    );
};

const ProfileIcon = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <MenuContainer
                handleLogout={props.handleLogout}
                anchorEl={anchorEl}
                theme={props.theme}
                handleClose={handleClose}
            />
            <IconButton
                sx={{
                    color: props.theme.textColor1
                }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
            >
                <AccountCircle />
            </IconButton>
        </>
    );
};

ProfileIcon.propTypes = {
    theme: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired
};
MenuContainer.propTypes = {
    theme: PropTypes.object.isRequired,
    anchorEl: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default ProfileIcon;
