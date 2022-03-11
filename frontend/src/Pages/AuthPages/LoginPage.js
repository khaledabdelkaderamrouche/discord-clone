import React, { useState, useEffect } from "react";
import AuthBox from "../../components/shared/AuthBox";
import LoginForm from "../../components/AuthComponents/LoginForm";
import LoginFooter from "../../components/AuthComponents/LoginFooter";
import { validateMail, validatePassword } from "../../Utils/Validators";
import AuthHeader from "../../components/shared/AuthHeader";

const LoginPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validatePassword(password) && validateMail(mail));
    }, [password, mail]);

    const handleLogin = () => {
        console.log("Login");
    };
    return (
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
    );
};

export default LoginPage;
