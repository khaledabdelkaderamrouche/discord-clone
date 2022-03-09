import React, {useState} from "react";
import AuthBox from "../../components/shared/AuthBox";
import LoginHeader from "../../components/AuthComponents/LoginHeader";
import LoginForm from "../../components/AuthComponents/LoginForm";
import LoginFooter from "../../components/AuthComponents/LoginFooter";

const LoginPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const handleLogin = () => {
        console.log("Login");
    };
    return (
        <AuthBox>
            <LoginHeader/>
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
