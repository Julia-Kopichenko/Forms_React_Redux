import React from "react";
import styled from "styled-components";
import { useField } from "formik";

const RadioButton = (props) => {
  const { label, name, value } = props;
  const [field] = useField(props);

  return (
    <StyledRadioButton>
      <label>
        <RadioButtonInput
          {...field}
          type="radio"
          value={value}
          name={name}
          checked={field.value === value}
        />
        <RadioButtonLabel>{label}</RadioButtonLabel>
      </label>
    </StyledRadioButton>
  );
};

export default RadioButton;

const StyledRadioButton = styled.div``;

const RadioButtonLabel = styled.div`
  position: relative;
  padding: 0 0 0 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.colorGrey};

  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: 0;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.colorGrey};
    border-radius: 50%;
    background: ${({ theme }) => theme.colorWhite};
  }

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colorBlack};
    opacity: 0;
    transition: 0.2s;
  }
`;

const RadioButtonInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 7px;
  &:checked + ${RadioButtonLabel}:after {
    opacity: 1;
  }
`;
