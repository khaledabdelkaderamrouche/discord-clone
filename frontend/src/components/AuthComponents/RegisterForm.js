import React from "react";
import InputWithLabel from "../shared/InputWithLabel";
import PropTypes from "prop-types";

const RegisterForm = ({ mail, setMail, username, setUsername, password, setPassword, number, setNumber }) => {
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
                value={username}
                tooltipHelper={"Please enter a valid username"}
                setValue={setUsername}
                label='Username'
                type="text"
                placeholder="Your name"
            />
            <InputWithLabel
                value={number}
                tooltipHelper={"Please enter a valid phone number"}
                setValue={setNumber}
                label='Phone Number'
                type="text"
                placeholder="Your phone number"
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
RegisterForm.propTypes = {
    mail: PropTypes.string.isRequired,
    setMail: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    number: PropTypes.string.isRequired,
    setNumber: PropTypes.func.isRequired
};
export default RegisterForm;
