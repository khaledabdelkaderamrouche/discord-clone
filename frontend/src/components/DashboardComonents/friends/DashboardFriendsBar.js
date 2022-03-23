import React from "react";
import Box from "@mui/material/Box";
import { Skeleton, Stack } from "@mui/material";
import PropTypes from "prop-types";

import CustomDivider from "../../shared/CustomDivider";
import RedirectInfo from "../../shared/RedirectInfo";
import { WrapperFriends } from "../../shared/Wrappers";
import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import DashboardFriendModal from "./DashboardFriendModal";
import { useSelector } from "react-redux";
import DashboardFriend from "./DashboardFriend";

const DashboardFriendsBar = (props) => {
    const color = props.theme.textColor1;
    const [open, setOpen] = React.useState(false);
    const friends = useSelector((state) => state.friends.value);
    const userFriends = friends.friends;
    const loadedFriends = friends.loadedFriends;
    const numberOfFriends = userFriends.length;
    const numberOfOnlineFriends = userFriends.filter(friend => friend.online).length;
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
            <RedirectInfo text={`You have ${numberOfOnlineFriends}/${numberOfFriends} online friends`} additionalStyles={{ height: "0.6em", padding: "10px", color: color }} />

            <CustomDivider color={color}/>

            <Stack direction="column" spacing={2}>
                {
                    !loadedFriends
                        ? (
                            [...Array(5)].map((e, i) =>
                                <WrapperFriends key={`d${i}`} >
                                    <Skeleton key={`i${i}`} variant="circular" width={64} height={64} sx={{ margin: "5px", bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                    <Skeleton key={`t${i}`} variant="text" width={180} sx={{ bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                </WrapperFriends>
                            )
                        )
                        : userFriends && loadedFriends
                            ? (
                                (userFriends.map((friend, key) => {
                                    return (
                                        <DashboardFriend
                                            key={key}
                                            avatar={friend.avatar}
                                            user={friend.username}
                                            online={friend.online}
                                        />
                                    );
                                })
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
    theme: PropTypes.object.isRequired
};
export default DashboardFriendsBar;
