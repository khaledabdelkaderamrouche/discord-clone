import React from "react";
import Box from "@mui/material/Box";
import DashboardChatSpaceInput from "./DashboardChatSpaceInput";
import DashboardChatConversationSpace from "./DashboardChatConversationSpace";
import DashboardChatHeaderSpace from "./DashboardChatHeaderSpace";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const DashboardChatSpace = (props) => {
    const activeConversation = useSelector((state) => state.chat.value);
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
            <DashboardChatHeaderSpace theme={props.theme} activeConversation={activeConversation?.activeConversation?.username} />
            <DashboardChatConversationSpace loaded={activeConversation.loadedMessages}>
                {/* <DashboardChatConversationItem avatar={"64_2.png"} user={"Khaled Amrouche"} dateTime={"16/03/2022 20:57"} position={"left"} theme={props.theme}>
                    Lorem ipsum dolor sit amet.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_4.png"} user={"Amine Salah"} dateTime={"16/03/2022 20:58"} position={"right"} theme={props.theme}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_2.png"} user={"Khaled Amrouche"} dateTime={"16/03/2022 20:57"} position={"left"} theme={props.theme}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_2.png"} user={"Khaled Amrouche"} dateTime={"16/03/2022 20:57"} position={"left"} theme={props.theme}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_4.png"} user={"Amine Salah"} dateTime={"16/03/2022 20:58"} position={"right"} theme={props.theme}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem>
                <DashboardChatConversationItem avatar={"64_4.png"} user={"Amine Salah"} dateTime={"16/03/2022 20:58"} position={"right"} theme={props.theme}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </DashboardChatConversationItem> */}
            </DashboardChatConversationSpace>
            <DashboardChatSpaceInput theme={props.theme} />
        </Box>
    );
};
DashboardChatSpace.propTypes = {
    theme: PropTypes.object.isRequired
};
export default DashboardChatSpace;
