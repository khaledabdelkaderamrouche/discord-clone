import React from "react";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import PropTypes from "prop-types";

const LoginFooter = ({handleLogin, isFormValid}) => {
    return (
        <div>
            <CustomPrimaryButton
                label={"Login"}
                additionalStyles={{marginTop: 50}}
                disabled={!isFormValid}
                onClick={handleLogin}

            />

        </div>
    );
};
LoginFooter.propTypes = {
    isFormValid: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired
};

export default LoginFooter;
