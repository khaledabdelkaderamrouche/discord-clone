import React from "react";
import InputWithLabel from "../shared/InputWithLabel";
import PropTypes from "prop-types";

const DashboardFriendIForm = ({ mail, setMail }) => {
    return (
        <>
            <InputWithLabel
                value={mail}
                tooltipHelper={"Please enter a valid email address"}
                setValue={setMail}
                label='Email'
                type="email"
                placeholder="Your friend email address"
            />
        </>
    );
};
DashboardFriendIForm.propTypes = {
    mail: PropTypes.string.isRequired,
    setMail: PropTypes.func.isRequired
};
export default DashboardFriendIForm;
