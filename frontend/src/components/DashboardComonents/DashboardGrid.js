import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import DashboardAppBar from "./DashboardAppBar";
import DashboardRoomsBar from "./DashboardRoomsBar";
import DashboardRoom from "./DashboardRoom";

const DashboardGrid = (menu, props) => {
    return (
        <Grid container >
            <Grid md={1}>
                <DashboardRoomsBar numberOfRooms={5}>
                    <DashboardRoom user="Khaled Amrouche"/>
                    <DashboardRoom user="Lhmed Dmine"/>
                    <DashboardRoom user="Khalil Amar"/>
                    <DashboardRoom user="Abdelkader Khaled Amrouche"/>
                    <DashboardRoom user="Mohamed Eminem Ben Achour"/>
                </DashboardRoomsBar>
            </Grid>
            <Grid md={2}>
                <Box
                    sx={{
                        height: "auto",
                        width: "100%",
                        background: "#1e272e",
                        flexDirection: "column",
                        padding: "25px",
                        color: "white"
                    }}
                >
                    {props.children}
                </Box>
            </Grid>
            <Grid md={9}>
                <DashboardAppBar/>
                <Box
                    sx={{
                        height: "auto",
                        background: "#485460",
                        display: "flex",
                        flexDirection: "column",
                        padding: "15px",
                        color: "white"
                    }}
                >
                    {props.children}
                </Box>
            </Grid>

        </Grid>
    );
};
DashboardGrid.propTypes = {
    children: PropTypes.any
};

export default DashboardGrid;
