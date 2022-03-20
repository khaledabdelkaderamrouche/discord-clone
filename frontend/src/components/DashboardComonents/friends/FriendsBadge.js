import Badge from "@mui/material/Badge";
import PeopleIcon from "@mui/icons-material/People";
import React from "react";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import RedirectInfo from "../../shared/RedirectInfo";

const InvitationsContainer = (props) => {
    const { handleAccept, handleReject, anchorEl, theme, handleClose, invitations } = props;
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
            <List dense={false}>
                {invitations.length > 0 && invitations.map((invitation, key) => {
                    return (
                        <ListItem key={key} sx={{ color: theme.textColor }}>
                            <ListItemAvatar>
                                <Avatar src={require(`../../../assets/avatars/${invitation.avatar}`)} sx={{ margin: "5px" }}/>
                            </ListItemAvatar>
                            <ListItemText primary={invitation.username} sx={{ marginRight: "15px" }}/>
                            <IconButton edge="end" aria-label="accept" color={"success"} onClick={handleAccept}>
                                <CheckIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" color={"error"} onClick={handleReject}>
                                <CloseIcon />
                            </IconButton>
                        </ListItem>
                    );
                })}{
                    invitations.length <= 0 && <RedirectInfo text={"No invitation found"} additionalStyles={{ padding: "10px", color: theme.textColor }} />
                }

            </List>
        </Menu>
    );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 12,
        top: 12,
        padding: "0 5px",
        height: "20px",
        opacity: "0.8"
    }
}));

const FriendsBadge = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <InvitationsContainer
                handleAccept={props.handleAccept}
                handleReject={props.handleReject}
                anchorEl={anchorEl}
                theme={props.theme}
                invitations={props.invitations}
                handleClose={handleClose}
            />
            <StyledBadge badgeContent={props.content} color="success" invisible={props.invisible} max={props.max}>
                <IconButton
                    sx={{
                        color: props.color
                    }}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                >
                    <PeopleIcon />
                </IconButton>
            </StyledBadge>
        </>
    );
};

FriendsBadge.propTypes = {
    handleAccept: PropTypes.func.isRequired,
    handleReject: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    content: PropTypes.number.isRequired,
    invisible: PropTypes.bool.isRequired,
    max: PropTypes.number.isRequired,
    invitations: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired
};
InvitationsContainer.propTypes = {
    handleAccept: PropTypes.func.isRequired,
    handleReject: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    anchorEl: PropTypes.object,
    invitations: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default FriendsBadge;
