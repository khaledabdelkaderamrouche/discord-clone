import React from "react";
import Box from "@mui/material/Box";
import { Skeleton, Stack } from "@mui/material";
import PropTypes from "prop-types";

import CustomDivider from "../shared/CustomDivider";
import RedirectInfo from "../shared/RedirectInfo";
import FriendWrapper from "../shared/FriendWrapper";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";

const DashboardFriendsBar = (props) => {
    const onCLick = () => {
    };
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#1e272e",
                borderRight: "1px solid #485460",
                padding: "25px",
                paddingBottom: "75px",
                color: "white"
            }}
        >
            <CustomPrimaryButton
                label={"Add new friend"}
                additionalStyles={{ backgroundColor: "transparent", color: "white" }}
                disabled={false}
                onClick={onCLick}
            />
            <RedirectInfo text={"You have 3/9 online friends"} additionalStyles={{ height: "0.6em", padding: "10px" }} />

            <CustomDivider/>

            <Stack direction="column" spacing={2}>

                {
                    props.children
                        ? (
                            props.children
                        )
                        : (
                            [...Array(props.numberOfFriends)].map((e, i) =>
                                <FriendWrapper key={`d${i}`} >
                                    <Skeleton key={`i${i}`} variant="circular" width={64} height={64} sx={{ margin: "5px", bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                    <Skeleton key={`t${i}`} variant="text" width={180} sx={{ bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                </FriendWrapper>
                            )

                        )
                }
            </Stack>
        </Box>
    );
};

DashboardFriendsBar.propTypes = {
    children: PropTypes.any,
    numberOfFriends: PropTypes.number.isRequired
};
export default DashboardFriendsBar;
