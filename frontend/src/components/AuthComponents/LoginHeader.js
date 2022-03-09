import React from "react";
import {Typography} from "@mui/material";

const LoginHeader = () => {
    return (
        <>
            <Typography variant="h1" sx={{color: "#fff"}}>Welcome Back !</Typography>
            <Typography variant='h2' sx={{color: "#b9bbbe"}}>We are happy to see you.</Typography>
        </>
    );
};

export default LoginHeader;
