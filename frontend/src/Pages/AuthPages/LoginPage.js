import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthBox from "../../components/shared/AuthBox";
import LoginForm from "../../components/AuthComponents/LoginForm";
import LoginFooter from "../../components/AuthComponents/LoginFooter";
import { validateMail, validatePassword } from "../../utils/Validators";
import AuthHeader from "../../components/shared/AuthHeader";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.value);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validatePassword(password) && validateMail(mail));
    }, [password, mail]);
    useEffect(() => {
        if (user && user.userDetails && user.userDetails.mail) { navigate("/dashboard"); }
    }, [user, navigate]);

    const handleLogin = () => {
        dispatch(login({
            mail,
            password
        }));
    };
    return (
        <>
            <AuthBox>
                <AuthHeader
                    header={"Welcome Back!"}
                    subHeader={"Happy to see you again !"}
                />
                <LoginForm
                    mail={mail}
                    setMail={setMail}
                    password={password}
                    setPassword={setPassword}
                />
                <LoginFooter
                    isFormValid={isFormValid}
                    handleLogin={handleLogin}
                />
            </AuthBox>

        </>
    );
};

export default LoginPage;
