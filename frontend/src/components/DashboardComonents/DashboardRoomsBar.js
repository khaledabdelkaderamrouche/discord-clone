import React from "react";
import DuoIcon from "@mui/icons-material/Duo";
import Box from "@mui/material/Box";
import { Divider, Skeleton, Stack } from "@mui/material";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const DashboardRoomsBar = (props) => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#ff8154",
                padding: "25px",
                color: "white"
            }}
        >
            <DuoIcon sx={{
                fontSize: "60px",
                marginBottom: "5px",
                padding: "15px"
            }}/>
            <Divider flexItem={true} color={"white"} light={true} variant={"fullWidth"} sx={{
                borderColor: "white",
                marginBottom: "20px"
            }}/>
            <IconButton aria-label="Add Room" sx={{
                border: "1px solid #dfe6e9",
                marginBottom:"15px",
                "&:hover": {
                    backgroundColor: "#1e272e",
                    border: "1px solid #1e272e"
                }
            }}>
                <AddCircleIcon sx={{
                    fontSize: "60px",
                    color:"white"
                }}/>
            </IconButton>
            <Stack direction="column" spacing={2}>
                {
                    props.children
                        ? (
                            props.children
                        )
                        : (
                            [...Array(props.numberOfRooms)].map((e, i) => <Skeleton key={i} variant="rounded" width={70} height={70} />)

                        )
                }
            </Stack>
        </Box>
    );
};

DashboardRoomsBar.propTypes = {
    children: PropTypes.any,
    numberOfRooms: PropTypes.number.isRequired
};
export default DashboardRoomsBar;
