import React from "react";
import CustomPrimaryButton from "../../components/shared/CustomPrimaryButton";
import { logout } from "../../features/authSlice";
import { useDispatch } from "react-redux";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(logout());
    };
    return (
        <CustomPrimaryButton
            label={"Login"}
            additionalStyles={{ marginTop: 50 }}
            disabled={false}
            onClick={handleLogin}
        />
    );
};

export default DashboardPage;
