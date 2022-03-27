import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DashboardRoomsBar from "../../components/DashboardComonents/DashboardRoomsBar";
import DashboardFriendsBar from "../../components/DashboardComonents/friends/DashboardFriendsBar";
import DashboardAppBar from "../../components/DashboardComonents/DashboardAppBar";
import DashboardChatSpace from "../../components/DashboardComonents/chat/DashboardChatSpace";
import { logout } from "../../features/authSlice";
import { connectToServer, socket } from "../../Socket.io/socketClient";
import {
    getFriends,
    getPendingInvitation,
    getPendingInvitations,
    updateFriends, updateFriendsStatus
} from "../../features/friendsSlice";
import { updateConversations } from "../../features/chatSlice";
// TODO REFACTOR THEME TO CONTEXTE
const DashboardPage = () => {
    const theme = useSelector((state) => state.theme.value);

    const user = JSON.parse(localStorage.getItem("userDetails"));
    const dispatch = useDispatch();
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };

    useEffect(() => {
        if (!user) { dispatch(logout()); } else {
            // TODO CHECK IF WE NEED TO SAVE LOCAL STORAGE
            connectToServer(user);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        dispatch(getPendingInvitations({}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });
    useEffect(() => {
        dispatch(getFriends({}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        socket.on("friend-invitation", payload => {
            const { pendingInvitation } = payload;
            dispatch(getPendingInvitation({ pendingInvitation }));
        });
        socket.on("friend-invitation-accepted", payload => {
            const { friend } = payload;
            dispatch(updateFriends({ friend }));
        });
        socket.on("online-users", (data) => {
            const { onlineUsers } = data;
            dispatch(updateFriendsStatus({ onlineUsers }));
        });
        socket.on("new-message", (data) => {
            const { message } = data;
            dispatch(updateConversations({ message }));
            scrollToBottom();
        });
    });
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
                <DashboardFriendsBar theme={theme}/>
            </Grid>
            <Grid item={true} md={9}>
                <DashboardAppBar
                    theme={theme}
                />
                <DashboardChatSpace
                    theme={theme}
                    messagesEndRef={messagesEndRef}
                    scrollToBottom={scrollToBottom}
                />
            </Grid>

        </Grid>
    );
};
DashboardPage.propTypes = {
    children: PropTypes.any
};

export default DashboardPage;
