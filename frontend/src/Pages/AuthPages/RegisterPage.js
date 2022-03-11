import React, { useEffect, useState } from "react";
import AuthBox from "../../components/shared/AuthBox";
import RegisterForm from "../../components/AuthComponents/RegisterForm";
import RegisterFooter from "../../components/AuthComponents/RegisterFooter";
import { validateMail, validateName, validateNumber, validatePassword } from "../../Utils/Validators";
import AuthHeader from "../../components/shared/AuthHeader";

const RegisterPage = () => {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        console.log("******************");
        console.log(validateMail(mail));
        console.log(validateName(name));
        console.log(name);
        console.log(validateNumber(number));
        console.log(validatePassword(password));

        setIsFormValid(validatePassword(password) && validateMail(mail) && validateName(name) && validateNumber(number));
    }, [password, mail, name, number]);

    const handleRegister = () => {
        console.log("Register");
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
                name={name}
                setName={setName}
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
