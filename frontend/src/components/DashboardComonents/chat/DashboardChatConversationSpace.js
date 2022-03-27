import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import DashboardChatConversationItemSkeleton from "./DashboardChatConversationItemSkeleton";
import DashboardChatConversationItem from "./DashboardChatConversationItem";

const DashboardChatConversationSpace = (props) => {
    const conversations = props.conversations;
    return (
        <Box
            sx={{
                display: "flex",
                overflowY: "scroll",
                overflowX: "hidden",
                width: "100%",
                height: "80%",
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
                                        <DashboardChatConversationItemSkeleton key={i} position={"left"}/>
                                    )
                                    : (
                                        <DashboardChatConversationItemSkeleton key={i} position={"right"}/>
                                    )
                            )
                        )
                        : (

                            (conversations.map((conversation, key) => {
                                console.info(conversation);
                                return (
                                    <DashboardChatConversationItem key={key} avatar={conversation.avatar} user={conversation.username} dateTime={conversation.timestamp} position={conversation.right ? "right" : "left"} theme={props.theme}>
                                        {conversation.content}
                                    </DashboardChatConversationItem>
                                );
                            })
                            )

                        )
                }
            </Stack>
        </Box>
    );
};

DashboardChatConversationSpace.propTypes = {
    loaded: PropTypes.bool.isRequired,
    conversations: PropTypes.array,
    theme: PropTypes.object.isRequired
};

export default DashboardChatConversationSpace;
