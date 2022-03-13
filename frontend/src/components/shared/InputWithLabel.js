import React from "react";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";

const Wrapper = styled("div")({
    color: "#b9bbbe",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%"
});
const Label = styled("p")({
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "16px"
});
const Input = styled("input")({
    flexGrow: 1,
    height: "40px",
    border: "1px solid #b2bec3",
    borderRadius: "",
    color: "#dcddde",
    background: "#35393f",
    margin: 0,
    fontSize: "16px",
    padding: "0 15px"

});

const InputWithLabel = (props) => {
    const { value, setValue, label, type, placeholder, tooltipHelper } = props;
    const handleValueChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Tooltip
            title={tooltipHelper}
        >
            <Wrapper>
                <Label>{label}</Label>
                <Input
                    className={"white-placeholder"}
                    value={value}
                    onChange={handleValueChange}
                    type={type}
                    placeholder={placeholder}
                />
            </Wrapper>
        </Tooltip>
    );
};
InputWithLabel.propTypes = {
    value: PropTypes.string.isRequired,
    tooltipHelper: PropTypes.string,
    setValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default InputWithLabel;
