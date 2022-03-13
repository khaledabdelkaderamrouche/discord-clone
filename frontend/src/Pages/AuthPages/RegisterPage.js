import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthBox from "../../components/shared/AuthBox";
import RegisterForm from "../../components/AuthComponents/RegisterForm";
import RegisterFooter from "../../components/AuthComponents/RegisterFooter";
import { validateMail, validateName, validateNumber, validatePassword } from "../../utils/Validators";
import AuthHeader from "../../components/shared/AuthHeader";
import { register } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.value);
    const [mail, setMail] = useState("");
    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validatePassword(password) && validateMail(mail) && validateName(username) && validateNumber(number));
    }, [password, mail, username, number]);
    useEffect(() => {
        if (user && user.userDetails && user.userDetails.mail) { navigate("/dashboard"); }
    }, [user, navigate]);
    const handleRegister = () => {
        dispatch(register({
            mail,
            password,
            username,
            number
        }));
    };
    return (
        <AuthBox>
            <AuthHeader
                header={"Welcome !"}
                subHeader={"Happy to count you among us !"}
            />
            <RegisterForm
                mail={mail}
                setMail={setMail}
                username={username}
                setUsername={setUsername}
                number={number}
                setNumber={setNumber}
                password={password}
                setPassword={setPassword}
            />
            <RegisterFooter
                isFormValid={isFormValid}
                handleRegister={handleRegister}
            />
        </AuthBox>
    );
};

export default RegisterPage;
