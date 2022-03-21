import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DashboardRoomsBar from "../../components/DashboardComonents/DashboardRoomsBar";
import DashboardFriendsBar from "../../components/DashboardComonents/friends/DashboardFriendsBar";
import DashboardAppBar from "../../components/DashboardComonents/DashboardAppBar";
import DashboardChatSpace from "../../components/DashboardComonents/DashboardChatSpace";
import DashboardFriend from "../../components/DashboardComonents/friends/DashboardFriend";
import { logout } from "../../features/authSlice";
import { connectToServer } from "../../Socket.io/socketClient";
import { getFriends, getPendingInvitations } from "../../features/friendsSlice";

const DashboardPage = () => {
    const theme = useSelector((state) => state.theme.value);
    const friends = useSelector((state) => state.friends.value);
    const userFriends = friends.friends;
    const userPendingInvitations = friends.pendingInvitations;
    const user = JSON.parse(localStorage.getItem("userDetails"));
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) { dispatch(logout()); } else {
            // TODO CHECK IF WE NEED TO SAVE LOCAL STORAGE
            connectToServer(user);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        dispatch(getFriends({
            userMail: user.userDetails.mail
        }));
        dispatch(getPendingInvitations({
            userMail: user.userDetails.mail
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <Grid container sx={{
            height: "100%",
            backgroundColor: theme.backgroundColor,
            color: theme.textColor1
        }}>
            <Grid item={true} md={1} sx={{
                overflowY: "scroll"
            }}>
                <DashboardRoomsBar numberOfRooms={8} theme={theme}>
                    {/* <DashboardRoom user="Khaled Amrouche"/>
                    <DashboardRoom user="Lhmed Dmine"/>
                    <DashboardRoom user="Khalil Amar"/>
                    <DashboardRoom user="Abdelkader Khaled Amrouche"/>
                    <DashboardRoom user="Eminem Ben Achour"/>
                    <DashboardRoom user="Ben Achour"/>
                    <DashboardRoom user="Achour Ali"/>
                    <DashboardRoom user="Mohamed Amine Asma"/>
                    <DashboardRoom user="Samara Big Boss"/> */}
                </DashboardRoomsBar>
            </Grid>
            <Grid item={true} md={2} sx={{
                overflowY: "scroll"
            }}>
                <DashboardFriendsBar
                    numberOfFriends={userFriends.length}
                    numberOfOnlineFriends={userFriends.filter(friend => friend.online).length}
                    theme={theme}>
                    {userFriends.length > 0 && userFriends.map((friend, key) => {
                        return (
                            <DashboardFriend
                                key={key}
                                avatar={friend.avatar}
                                user={friend.username}
                                online={friend.online}
                            />
                        );
                    })}
                </DashboardFriendsBar>
            </Grid>
            <Grid item={true} md={9}>
                <DashboardAppBar
                    theme={theme}
                    userPendingInvitations={userPendingInvitations}
                />
                <DashboardChatSpace
                    theme={theme}
                />
            </Grid>

        </Grid>
    );
};
DashboardPage.propTypes = {
    children: PropTypes.any
};

export default DashboardPage;
