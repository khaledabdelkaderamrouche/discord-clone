import React from "react";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import PropTypes from "prop-types";
import RedirectInfo from "../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormValidationMessage = (valid) => {
    if (valid) { return "Press to log in !"; } else { return "Please enter a valid email address and password."; }
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
    const navigate = useNavigate();

    const redirectToRegister = () => {
        navigate("/register");
    };
    return (
        <>
            <Tooltip
                title={getFormValidationMessage(isFormValid)}
            >
                <div>
                    <CustomPrimaryButton
                        label={"Login"}
                        additionalStyles={{ marginTop: 50 }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                    <RedirectInfo
                        text="No account ? "
                        linkText="Register !"
                        redirectHandler={redirectToRegister}
                    />
                </div>
            </Tooltip>
        </>
    );
};
LoginFooter.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired
};

export default LoginFooter;
