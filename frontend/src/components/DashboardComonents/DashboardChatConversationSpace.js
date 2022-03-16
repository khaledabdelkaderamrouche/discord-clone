import React from "react";
import Box from "@mui/material/Box";
import DashboardChatConversationItem from "./DashboardChatConversationItem";
import { Stack } from "@mui/material";

const DashboardChatConversationSpace = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                overflowY: "scroll",
                width: "100%",
                backgroundColor: "#1e272e",
                color: "white",
                alignContent: "center",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                flexGrow: 1

            }}
        >
            <Stack direction="column" spacing={5}>
                <DashboardChatConversationItem avatar={"64_2.png"} user={"Khaled Amrouche"} dateTime={"16/03/2022 20:57"} position={"left"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_4.png"} user={"Amine Salah"} dateTime={"16/03/2022 20:58"} position={"right"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_2.png"} user={"Khaled Amrouche"} dateTime={"16/03/2022 20:57"} position={"left"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_2.png"} user={"Khaled Amrouche"} dateTime={"16/03/2022 20:57"} position={"left"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_4.png"} user={"Amine Salah"} dateTime={"16/03/2022 20:58"} position={"right"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_4.png"} user={"Amine Salah"} dateTime={"16/03/2022 20:58"} position={"right"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
            </Stack>
        </Box>
    );
};

export default DashboardChatConversationSpace;
