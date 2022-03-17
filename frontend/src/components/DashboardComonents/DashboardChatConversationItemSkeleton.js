import React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";
import { WrapperLeft, WrapperRight } from "../shared/Wrappers";
import PropTypes from "prop-types";

const DashboardChatConversationItemSkeleton = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100%",
                height: "auto"
            }}
        >
            {
                props.position === "right"
                    ? (
                        <>
                            <WrapperRight>
                                <Skeleton variant="circular" width={64} height={64} sx={{ margin: "10px", bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                <Skeleton variant="text" width={180} sx={{ bgcolor: "rgba(72, 84, 96,0.5)", margin: "15px", textAlign: "left" }}/>
                                <Skeleton variant="text" width={120} height={15} sx={{ bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                            </WrapperRight>
                            <Skeleton variant="text" width={"80%"} height={20} sx={{ bgcolor: "rgba(72, 84, 96,0.5)", margin: "15px", textAlign: "left" }}/>
                        </>
                    )
                    : (
                        <>
                            <WrapperLeft>
                                <Skeleton variant="circular" width={64} height={64} sx={{ margin: "10px", bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                                <Skeleton variant="text" width={180} sx={{ bgcolor: "rgba(72, 84, 96,0.5)", margin: "15px", textAlign: "left" }}/>
                                <Skeleton variant="text" width={120} height={15} sx={{ bgcolor: "rgba(72, 84, 96,0.5)" }}/>
                            </WrapperLeft>
                            <Skeleton variant="text" width={"80%"} height={90} sx={{ bgcolor: "rgba(72, 84, 96,0.5)", margin: "15px", textAlign: "left" }}/>
                        </>
                    )
            }
        </Box>
    );
};

DashboardChatConversationItemSkeleton.propTypes = {
    position: PropTypes.oneOf(["left", "right"]).isRequired
};
export default DashboardChatConversationItemSkeleton;
