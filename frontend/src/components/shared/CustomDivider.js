import React from "react";
import { Divider } from "@mui/material";

const CustomDivider = () => {
    return (

        <Divider flexItem={true} color={"white"} light={true} variant={"fullWidth"} sx={{
            borderColor: "white",
            marginBottom: "20px"
        }}/>
    );
};
CustomDivider.propTypes = {

};

export default CustomDivider;
