import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AlertNotification from "../shared/AlertNotification";
import DashboardFriendIForm from "./DashboardFriendIForm";
import { validateMail } from "../../utils/Validators";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";

const DashboardFriendModal = (props) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const getFormValidationMessage = (valid) => {
        if (valid) { return "Press to invite friend !"; } else { return "Please enter a valid email address."; }
    };
    const handleInvite = () => {

    };
    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail]);
    return (
        <>
        <AlertNotification/>
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                backgroundColor: "#1e272e",
                color:"#d2dae2",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <DashboardFriendIForm mail={mail} setMail={setMail}/>
                <Tooltip
                    title={getFormValidationMessage(isFormValid)}
                >
                    <div>
                        <CustomPrimaryButton
                            label={"Invite"}
                            additionalStyles={{ marginTop: 50 }}
                            disabled={!isFormValid}
                            onClick={handleInvite}
                        />
                    </div>
                </Tooltip>
            </Box>
        </Modal>
        </>

    );
};

DashboardFriendModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};
export default DashboardFriendModal;
