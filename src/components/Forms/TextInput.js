import React from "react";
import styled, { css } from "styled-components";
import { Field } from "formik";

const InputWrapper = styled.div`
  position: relative;
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colorError};
  position: absolute;
  top: -15px;
`;

const StyledInput = styled.input`
  display: block;
  width: 380px;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colorGreyLight};
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: 2px;
  font-size: 16px;
  padding: 0 10px;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0 0 1px 1px, rgb(227, 230, 232) 0 0 0 2px;
    border: 1px solid ${({ theme }) => theme.colorGreyLight};
    outline: none;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid ${({ theme }) => theme.colorGreen};
      &:focus,
      &:active {
        border: 1px solid ${({ theme }) => theme.colorGreen};
        box-shadow: ${({ theme }) => theme.colorGreen} 0 0 2px 1px,
          rgb(177, 247, 160) 0 0 0 2px;
        outline: none;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.colorError};
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0 0 2px 1px, rgb(251, 178, 174) 0 0 0 3px;
        outline: none;
      }
    `}
`;

const MyInput = ({ form: { touched, errors }, field, ...props }) => {

  return (
    <>
      {touched[field.name] && errors[field.name] && (
        <ErrorText>{errors[field.name]}</ErrorText>
      )}
      <StyledInput
        {...field}
        {...props}
        valid={touched[field.name] && !errors[field.name]}
        error={touched[field.name] && errors[field.name]}
      />
    </>
  );
};

export const TextField = ({ name }) => {

  return (
    <InputWrapper>
      <Field name={name} component={MyInput} />
    </InputWrapper>
  );
};

