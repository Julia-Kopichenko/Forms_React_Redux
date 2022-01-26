import React from "react";
import { Formik, Form, Field } from "formik";
import RadioButton from "../../../components/RadioButton";
import { Fragment } from "react";
import styled from "styled-components";


const FormOwnData = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        patronymic: "",
        dateOfBirthday: "",
        gender: "",
        country: "",
        address: "",
        mothersSurname: "",
        codeword: "",
        info: "",
        friendsEmail: "",
      }}
      // форма б-т валидироваться при переходе на след.поле
      // validateOnBlur
      // метод, кот.будет вызывать ф-цию во время отправки формы
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        isValid,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <Form>
            <div className="form-registrashion__fields">
              <p>Все поля формы обязательны для заполнения</p>

              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="Jane" />

              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Doe" />
            </div>
            <Hr />

            <button type="submit" className="button-submit">
              Далее
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormOwnData;

const Hr = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;

// touched - параметр, кот. показывает взаимодействовали ли мы с полем ранее
// handleChange - вызыв. каждый раз, когда мы меняем значение формы
// handleBlur - вызыв. каждый раз, когда мы уходим из значения формы
// isValid - говорит валидна ли форма в данный момент или нет
// handleSubmit - привязывается к кнопке отправки формы, он б-т вызывать функцию onSubmit
