import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./Input.css";
import { FONT_FAMILY, TEXT_FONT_SIZE } from "../../constants";

const StyledInput = styled.input.attrs((props) => ({
  "aria-label": `${props.label + "-aria"}`,
  "aria-required": `${props.required}`,
}))`
  width: 665px;
  height: 36px;
  margin-bottom: 16px;
  border: solid 1px #979797;
  background-color: #ffffff;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const StyledLabel = styled.label`
  text-align: left;
  width: 166px;
  height: 25px;
  font-family: ${FONT_FAMILY};
  font-size: ${TEXT_FONT_SIZE};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

export const InputContainer = styled.div`
  width: 90%;

  @media (max-width: 830px) {
    width: 100%;
  }
`;

// This component takes the input element and styles it according to the
// design.

function Input({
  label = "",
  required = true,
  id,
  readOnly = false,
  onChange,
}) {
  return (
    <InputContainer alert={alert}>
      <div style={{ marginBottom: "8px" }}>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </div>
      <StyledInput
        label={label}
        required={required}
        id={id}
        readOnly={readOnly}
        onChange={onChange}
      />
    </InputContainer>
  );
}

Input.defaultProps = {
  label: "",
  type: "text",
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
