import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import DashboardChatConversationItemSkeleton from "./DashboardChatConversationItemSkeleton";

const DashboardChatConversationSpace = (props) => {
    console.log(props.loaded);
    return (
        <Box
            sx={{
                display: "flex",
                overflowY: "scroll",
                overflowX: "hidden",
                width: "100%",
                alignContent: "center",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                flexGrow: 1

            }}
        >
            <Stack direction="column" spacing={5} sx={{
                width: "100%",
                display: "flex",
                padding: "20px",
                margin: "20px"
            }}>
                {
                    !props.loaded
                        ? (
                            [...Array(4)].map((e, i) =>

                                i % 2 === 0
                                    ? (
                                        <DashboardChatConversationItemSkeleton position={"left"}/>
                                    )
                                    : (
                                        <DashboardChatConversationItemSkeleton position={"right"}/>
                                    )
                            )
                        )
                        : (

                            null

                        )
                }
            </Stack>
        </Box>
    );
};

DashboardChatConversationSpace.propTypes = {
    loaded: PropTypes.bool.isRequired,
    children: PropTypes.any
};

export default DashboardChatConversationSpace;
