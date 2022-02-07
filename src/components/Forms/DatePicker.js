import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import styled, { css } from "styled-components";

import Datepicker from "react-datepicker";

import es from "date-fns/locale/es";
import en from "date-fns/locale/en-GB";

import "react-datepicker/dist/react-datepicker.css";
import { format, setMonth, getMonth, getYear } from "date-fns";

const locales = {
  es,
  en,
};

const customHeader = ({ locale, date, changeMonth, changeYear }) => {
  const months = new Array(12).fill(null).map((_, i) => ({
    value: i,
    label: format(setMonth(new Date(), i), "MMMM", {
      locale: locales[locale],
    }),
  }));

  const years = new Array(83).fill(null).map((_, i) => 1940 + i);

  const handleYearChange = ({ target: { value } }) => changeYear(value);
  const handleMonthChange = ({ target: { value } }) => changeMonth(value);

  return (
    <div>
      <select onChange={handleMonthChange} value={getMonth(date)}>
        {months.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>

      <select onChange={handleYearChange} value={getYear(date)}>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};


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

const MyInput = ({
  touched,
  error,
  field,
  ...props
}) => {
  return (
    <>
      {touched && error && (
        <ErrorText>{error}</ErrorText>
      )}
      <StyledInput
        {...field}
        {...props}
        valid={touched && !error}
        error={touched && error}
      />
    </>
  );
};

function DatePickerField({ ...props }) {
  const [field, form] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [locale, setLocale] = useState("en");

  return (
    <div>
      <Datepicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        placeholderText="mm/dd/yyyy"
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        renderCustomHeader={(props) => customHeader({ ...props, locale })}
        locale={locales[locale]}
        customInput={<MyInput {...form} field={field} {...props} />}
      />
    </div>
  );
}
export default DatePickerField;
