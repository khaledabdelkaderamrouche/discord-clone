import React from "react";
import CustomAlert from "./Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../../features/alertSlice";

const AlertNotification = () => {
    const alert = useSelector((state) => state.alert.value);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(closeAlert());
    };
    return (

        <CustomAlert severity={alert.options.severity} text={alert.options.text} title={alert.options.title} filled={alert.options.filled} open={alert.open} handleClose={handleClose}/>
    );
};
export default AlertNotification;
