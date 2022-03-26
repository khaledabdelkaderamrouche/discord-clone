import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AlertNotification from "../../shared/AlertNotification";
import DashboardFriendIForm from "./DashboardFriendIForm";
import { validateMail } from "../../../utils/Validators";
import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import { useDispatch } from "react-redux";
import { sendInvitation } from "../../../features/friendsSlice";

const DashboardFriendModal = (props) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();

    const getFormValidationMessage = (valid) => {
        if (valid) { return "Press to invite friend !"; } else { return "Please enter a valid email address."; }
    };
    const handleInvite = () => {
        const receiverMail = mail;

        const invitationSent = dispatch(sendInvitation({
            receiverMail
        }));
        invitationSent.then((result) => {
            if (result) {
                setMail("");
                props.setOpen(false);
            }
        });
    };
    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail]);
    // TODO THINK OF THIS
    /* useEffect(() => {
        setOpen(true);
    }, []); */
    return (
        <>
            <AlertNotification/>
            <Modal
                open={ props.open && open}
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
                    color: "#d2dae2",
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
    setOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
};
export default DashboardFriendModal;
