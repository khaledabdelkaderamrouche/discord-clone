import React from "react";
import CustomPrimaryButton from "../../components/shared/CustomPrimaryButton";
import { logout } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import DashboardGrid from "../../components/DashboardComonents/DashboardGrid";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(logout());
    };
    return (
        <DashboardGrid>
            <CustomPrimaryButton
                label={"Login"}
                additionalStyles={{ marginTop: 50 }}
                disabled={false}
                onClick={handleLogin}
            />
        </DashboardGrid>

    );
};

export default DashboardPage;
