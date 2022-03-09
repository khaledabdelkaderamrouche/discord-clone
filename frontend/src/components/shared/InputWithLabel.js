import React from "react";
import {styled} from "@mui/system";
import PropTypes from "prop-types";

const Wrapper = styled("div")({
    color: "#b9bbbe",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%"
});
const Label = styled("p")({
    color: "#hb9bbbe",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "16px"
});
const Input = styled("input")({
    flexGrow: 1,
    height: "40px",
    border: "1px solid black",
    borderRadius: "",
    color: "#dcddde",
    background: "#35393f",
    margin: 0,
    fontSize: "16px",
    padding: "0 15px"
});

const InputWithLabel = (props) => {
    const {value, setValue, label, type, placeholder} = props;
    const handleValueChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input
                value={value}
                onChange={handleValueChange}
                type={type}
                placeholder={placeholder}
            />
        </Wrapper>
    );
};
InputWithLabel.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default InputWithLabel;
