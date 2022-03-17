import React from "react";
import Box from "@mui/material/Box";
import DashboardChatSpaceInput from "./DashboardChatSpaceInput";
import DashboardChatConversationSpace from "./DashboardChatConversationSpace";
import DashboardChatHeaderSpace from "./DashboardChatHeaderSpace";
import DashboardChatConversationItem from "./DashboardChatConversationItem";
import PropTypes from "prop-types";

const DashboardChatSpace = (props) => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <DashboardChatHeaderSpace theme={props.theme}/>
            <DashboardChatConversationSpace>
                <DashboardChatConversationItem avatar={"64_2.png"} user={"Khaled Amrouche"} dateTime={"16/03/2022 20:57"} position={"left"}>
                    Lorem ipsum dolor sit amet.
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
            </DashboardChatConversationSpace>
            <DashboardChatSpaceInput/>
        </Box>
    );
};
DashboardChatSpace.propTypes = {
    theme: PropTypes.object.isRequired
};
export default DashboardChatSpace;
