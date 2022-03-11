import React from "react";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import PropTypes from "prop-types";
import RedirectInfo from "../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormValidationMessage = (valid) => {
    if (valid) { return "Press to register !"; } else { return "Please fill correctly all required fields."; }
};

const RegisterFooter = ({ handleRegister, isFormValid }) => {
    const navigate = useNavigate();

    const redirectToLogin = () => {
        navigate("/login");
    };
    return (
        <>
            <Tooltip
                title={getFormValidationMessage(isFormValid)}
            >
                <div>
                    <CustomPrimaryButton
                        label={"Register"}
                        additionalStyles={{ marginTop: 50 }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                    <RedirectInfo
                        text="Already have an account ? "
                        linkText="Login !"
                        redirectHandler={redirectToLogin}
                    />
                </div>
            </Tooltip>
        </>
    );
};
RegisterFooter.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
    handleRegister: PropTypes.func.isRequired
};

export default RegisterFooter;
