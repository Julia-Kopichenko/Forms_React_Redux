import React from "react";
import { Formik, Form, Field } from "formik";
// import RadioButton from "../../../components/RadioButton";
import styled from "styled-components";
import { Button } from "../../../components/Forms/Button";
import { Label } from "../../../components/Forms/Label";
// import { MyInput } from "../../../components/Forms/Input";

import { Text } from "../../../components/Typography/Typography";
import { Flex } from "../../../components/Flex";

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
      validateOnBlur
      // форма б-т валидироваться при переходе на след.поле (validateOnBlur)
      // метод, кот.будет вызывать ф-цию во время отправки формы (onSubmit)
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
        dirty
      }) => {
        return (
          <Form>
            <Text fontSize="12px">
              Все поля формы обязательны для заполнения
            </Text>

            <Flex justify="space-between" width="87%">
              <Label htmlFor="firstName">Имя:</Label>
              {/* <Field id="firstName" name="firstName" placeholder="Василий" /> */}
              <Field id="firstName" name="firstName" placeholder="Василий" component={MyInput}/>
            </Flex>

            <Label htmlFor="lastName">Фамилия:</Label>
            <Field id="lastName" name="lastName" placeholder="Лоханкин" />
            <hr />

            <Button type="submit">Далее</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormOwnData;

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

// touched - параметр, кот. показывает взаимодействовали ли мы с полем ранее
// handleChange - вызыв. каждый раз, когда мы меняем значение формы
// handleBlur - вызыв. каждый раз, когда мы уходим из значения формы
// isValid - говорит валидна ли форма в данный момент или нет
// handleSubmit - привязывается к кнопке отправки формы, он б-т вызывать функцию onSubmit
// dirty - параметр, который говорит изменялись ли когда-нибудь параметры в форме

/*
<input
  type={"text"}
  name={"lastName"}
  onChange={handleChange}
  omBlur={handleBlur}
  value={values.name}
>
</input>
*/
// type={"text"} - не обязательное поле
// name="lastName" - обязательое поле, которое должно соппадать с именами объектов initialValues