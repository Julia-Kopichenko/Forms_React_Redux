import React from "react";
import { Field } from "formik";

import "./RadioButton.scss";

const RadioButton = (props) => {
  const { label, name, value, ...rest } = props;

  return (
    <label className="label">
      <Field className="label__input" type="radio" value={value} name={name} />
      <div className="label__text">{label}</div>
    </label>
  );
};

export default RadioButton;
