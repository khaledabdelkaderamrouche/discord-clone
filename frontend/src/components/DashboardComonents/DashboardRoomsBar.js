import React from "react";
import DuoIcon from "@mui/icons-material/Duo";
import Box from "@mui/material/Box";
import { Skeleton, Stack } from "@mui/material";
import PropTypes from "prop-types";
import CustomAddButton from "../shared/CustomAddButton";
import CustomDivider from "../shared/CustomDivider";

const onClick = () => {
    // TODO implement this
};

const DashboardRoomsBar = (props) => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRight: "1px solid #485460",
                padding: "25px",
                paddingBottom: "50px",
                color: props.theme.textColor1
            }}
        >
            <DuoIcon sx={{
                fontSize: "60px",
                marginBottom: "5px",
                padding: "15px"
            }}/>
            <CustomDivider/>
            <CustomAddButton disabled={false} onClick={onClick}/>
            <Stack direction="column" spacing={2}>
                {
                    props.children
                        ? (
                            props.children
                        )
                        : (
                            [...Array(props.numberOfRooms)].map((e, i) => <Skeleton key={i} variant="rounded" width={70} height={70} sx={{ bgcolor: "rgba(72, 84, 96,0.5)" }}/>)

                        )
                }
            </Stack>
        </Box>
    );
};

DashboardRoomsBar.propTypes = {
    children: PropTypes.any,
    numberOfRooms: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired
};
export default DashboardRoomsBar;
