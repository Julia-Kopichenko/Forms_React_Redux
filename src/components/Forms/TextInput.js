import React from "react";
import { StyledInput } from "./StyledInputField";
import { ErrorText } from "./ErrorText";

export const MyTextInput = ({ form: { touched, errors }, field, ...props }) => {

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
