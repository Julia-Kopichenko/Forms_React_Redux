import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import { ErrorText } from "./ErrorText";

import Datepicker from "react-datepicker";
import { StyledInput } from "./StyledInputField";
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

const MyInput = ({ touched, error, field, ...props }) => {
  return (
    <>
      {touched && error && <ErrorText>{error}</ErrorText>}
      <StyledInput
        {...field}
        {...props}
        valid={touched && !error}
        error={touched && error}
        autoComplete="off"
      />
    </>
  );
};

function DatePickerField({ ...props }) {
  const [field, form] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [locale, setLocale] = useState("en");

  return (
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
  );
}
export default DatePickerField;
