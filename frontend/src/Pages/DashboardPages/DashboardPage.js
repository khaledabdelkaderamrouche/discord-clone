import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DashboardRoomsBar from "../../components/DashboardComonents/DashboardRoomsBar";
import DashboardFriendsBar from "../../components/DashboardComonents/DashboardFriendsBar";
import DashboardAppBar from "../../components/DashboardComonents/DashboardAppBar";
import DashboardChatSpace from "../../components/DashboardComonents/DashboardChatSpace";
import DashboardFriend from "../../components/DashboardComonents/DashboardFriend";
import { logout } from "../../features/authSlice";
import { connectToServer } from "../../Socket.io/socketClient";

const DashboardPage = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    useEffect(() => {
        const user = localStorage.getItem("userDetails");
        if (!user) { dispatch(logout()); } else {
            // TODO CHECK IF WE NEED TO SAVE LOCAL STORAGE
            connectToServer(JSON.parse(user));
        }
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
                <DashboardFriendsBar numberOfFriends={9} theme={theme}>
                    <DashboardFriend avatar={"64_1.png"} user="Amine Nahdi" online={false} />
                    <DashboardFriend avatar={"64_2.png"} user="Khaled Amrouche" online={true} />
                    <DashboardFriend avatar={"64_3.png"} user="Lhmed Dmine" online={false} />
                    <DashboardFriend avatar={"64_4.png"} user="Khalil Amar" online={true} />
                    <DashboardFriend avatar={"64_5.png"} user="Abdelkader Khaled Amrouche" online={false} />
                    <DashboardFriend avatar={"64_6.png"} user="Eminem Ben Achour" online={false} />
                    <DashboardFriend avatar={"64_7.png"} user="Ben Achour" online={true} />
                    <DashboardFriend avatar={"64_8.png"} user="Achour Ali" online={false} />
                    <DashboardFriend avatar={"64_9.png"} user="Mohamed Amine Asma" online={false} />
                    <DashboardFriend avatar={"64_10.png"} user="Samara Big Boss" online={false} />
                </DashboardFriendsBar>
            </Grid>
            <Grid item={true} md={9}>
                <DashboardAppBar {...theme}/>
                <DashboardChatSpace theme={theme} />
            </Grid>

        </Grid>
    );
};
DashboardPage.propTypes = {
    children: PropTypes.any
};

export default DashboardPage;
