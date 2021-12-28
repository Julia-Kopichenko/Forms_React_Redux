import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";

import RadioButton from "../RadioButton";

import "./form1.scss";

const Form1 = () => {
  const navigate = useNavigate();

  return (
    <div className="form form-registrashion">
      <h1>Выберете способ регистрации:</h1>

      <Formik
        initialValues={{ picked: "personal" }}
        onSubmit={({ picked }) => {
          picked === "personal" ? navigate("/") : navigate("/point2");
        }}
      >
        {({ values }) => (
          <Form>
            <div className="radio-group">
              <RadioButton
                value="personal"
                label="Персональная"
                name="picked"
              />
              <RadioButton
                label="Регистрация пользователей списком"
                name="picked"
                value="public"
              />
            </div>
            {values.picked === "public" ? (
              <div className="list">Загрузить список</div>
            ) : null}

            <button type="submit" className="button">
              Далее
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Form1;
