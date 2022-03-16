import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import DashboardAppBar from "./DashboardAppBar";
import DashboardRoomsBar from "./DashboardRoomsBar";
import DashboardRoom from "./DashboardRoom";
import DashboardFriendsBar from "./DashboardFriendsBar";
import DashboardFriend from "./DashboardFriend";
import DashboardChatSpace from "./DashboardChatSpace";

const DashboardGrid = () => {
    return (
        <Grid container sx={{ height: "100%" }}>
            <Grid item={true} md={1} sx={{ overflowY: "scroll" }}>
                <DashboardRoomsBar numberOfRooms={5}>
                    <DashboardRoom user="Khaled Amrouche"/>
                    <DashboardRoom user="Lhmed Dmine"/>
                    <DashboardRoom user="Khalil Amar"/>
                    <DashboardRoom user="Abdelkader Khaled Amrouche"/>
                    <DashboardRoom user="Eminem Ben Achour"/>
                    <DashboardRoom user="Ben Achour"/>
                    <DashboardRoom user="Achour Ali"/>
                    <DashboardRoom user="Mohamed Amine Asma"/>
                    <DashboardRoom user="Samara Big Boss"/>
                </DashboardRoomsBar>
            </Grid>
            <Grid item={true} md={2} sx={{ overflowY: "scroll" }}>
                <DashboardFriendsBar numberOfFriends={10}>
                    <DashboardFriend avatar={"64_1.png"} user={"Amine Nahdi"}/>
                    <DashboardFriend avatar={"64_2.png"} user="Khaled Amrouche"/>
                    <DashboardFriend avatar={"64_3.png"} user="Lhmed Dmine"/>
                    <DashboardFriend avatar={"64_4.png"} user="Khalil Amar"/>
                    <DashboardFriend avatar={"64_5.png"} user="Abdelkader Khaled Amrouche"/>
                    <DashboardFriend avatar={"64_6.png"} user="Eminem Ben Achour"/>
                    <DashboardFriend avatar={"64_7.png"} user="Ben Achour"/>
                    <DashboardFriend avatar={"64_8.png"} user="Achour Ali"/>
                    <DashboardFriend avatar={"64_9.png"} user="Mohamed Amine Asma"/>
                    <DashboardFriend avatar={"64_10.png"} user="Samara Big Boss"/>
                </DashboardFriendsBar>
            </Grid>
            <Grid item={true} md={9} >
                <DashboardAppBar/>
                <DashboardChatSpace/>
            </Grid>

        </Grid>
    );
};
DashboardGrid.propTypes = {
    children: PropTypes.any
};

export default DashboardGrid;
