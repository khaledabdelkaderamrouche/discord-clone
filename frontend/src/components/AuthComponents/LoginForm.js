import React from "react";
import InputWithLabel from "../shared/InputWithLabel";
import PropTypes from "prop-types";

const LoginForm = ({ mail, setMail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel
                value={mail}
                tooltipHelper={"Please enter a valid email address"}
                setValue={setMail}
                label='Email'
                type="email"
                placeholder="Your email address"
            />
            <InputWithLabel
                value={password}
                tooltipHelper={"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}
                setValue={setPassword}
                label='Password'
                type="password"
                placeholder="Your password"
            />
        </>
    );
};
LoginForm.propTypes = {
    mail: PropTypes.string.isRequired,
    setMail: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired
};
export default LoginForm;
