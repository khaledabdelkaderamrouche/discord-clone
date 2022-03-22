import React from "react";
import Box from "@mui/material/Box";
import { Skeleton, Stack } from "@mui/material";
import PropTypes from "prop-types";

import CustomDivider from "../../shared/CustomDivider";
import RedirectInfo from "../../shared/RedirectInfo";
import { WrapperFriends } from "../../shared/Wrappers";
import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import DashboardFriendModal from "./DashboardFriendModal";

const DashboardFriendsBar = (props) => {
    const color = props.theme.textColor1;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRight: "1px solid #485460",
                padding: "25px",
                paddingBottom: "75px"
            }}
        >
            <CustomPrimaryButton
                label={"Add new friend"}
                additionalStyles={{ backgroundColor: "transparent", color: color }}
                disabled={false}
                onClick={handleOpen}
            />
            <RedirectInfo text={`You have ${props.numberOfOnlineFriends}/${props.numberOfFriends} online friends`} additionalStyles={{ height: "0.6em", padding: "10px", color: color }} />

            <CustomDivider color={color}/>

            <Stack direction="column" spacing={2}>

                {
                    props.children
                        ? (
                            props.children
                        )
                        : props.children === false
                            ? (
                                [...Array(5)].map((e, i) =>
                                    <WrapperFriends key={`d${i}`} >
                                        <Skeleton key={`i${i}`} variant="circular" width={64} height={64} sx={{ margin: "5px", bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                        <Skeleton key={`t${i}`} variant="text" width={180} sx={{ bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                    </WrapperFriends>
                                )

                            )
                            : null
                }
            </Stack>
            <DashboardFriendModal handleClose={handleClose} open={open} setOpen={setOpen} />
        </Box>
    );
};

DashboardFriendsBar.propTypes = {
    children: PropTypes.any,
    numberOfFriends: PropTypes.number.isRequired,
    numberOfOnlineFriends: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired
};
export default DashboardFriendsBar;
