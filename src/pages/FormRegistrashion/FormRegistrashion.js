import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";

import RadioButton from "../../components/RadioButton";

import "./FormRegistrashion.scss";

const FormRegistrashion = () => {
  const navigate = useNavigate();

  return (
    <div className="form form-wayregistrashion">
      <h1>Выберете способ регистрации:</h1>

      <Formik
        initialValues={{ picked: "personal" }}
        onSubmit={({ picked }) => {
          picked === "personal"
            ? navigate("/registration/personal")
            : navigate("/registration/public");
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

            <button type="submit" className="button-submit">
              Далее
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormRegistrashion;
