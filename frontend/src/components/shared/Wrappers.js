import { styled } from "@mui/system";

export const WrapperFriends = styled("div")({
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer"

});
export const WrapperRight = styled("div")({
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
});
export const WrapperLeft = styled("div")({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
});
