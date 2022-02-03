import React from "react";
import styled, { css } from "styled-components";
import { Flex } from "../Flex";
import { Label } from "./Label";
import { Field } from "formik";

const ErrorText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colorError};
  position: absolute;
  top: -15px;
`;

const InputWrapper = styled.div`
  position: relative;
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
    box-shadow: rgb(210, 213, 217) 0px 0px 1px 1px,
      rgb(227, 230, 232) 0px 0px 0px 2px;
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
        box-shadow: ${({ theme }) => theme.colorGreen} 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 2px;
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
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
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

export const MyTextInput = ({ name, label }) => {
  return (
    <Flex justify="space-between" margin="0 0 25px 0">
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper>
        <Field name={name} component={MyInput} />
      </InputWrapper>
    </Flex>
  );
};
