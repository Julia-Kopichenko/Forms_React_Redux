import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
// import RadioButton from "../../../components/RadioButton";
import styled from "styled-components";
import { Button } from "../../../components/Forms/Button";
import { MyTextInput } from "../../../components/Forms/TextInput";
import { Text } from "../../../components/Typography/Typography";
import { Flex } from "../../../components/Flex";
import { PATH_NAME } from "../../../constants/pathNames";

const FormCreditCard = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
    lastName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
    patronymic: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
  });

  return (
    <StyledFormOwnData>
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
        validationSchema={validationSchema}
        // форма б-т валидироваться при переходе на след.поле (validateOnBlur)
        // метод, кот.будет вызывать ф-цию во время отправки формы (onSubmit)
        onSubmit={(values) => {
          navigate(PATH_NAME.registration_personal_card)
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          isValid,
          handleBlur,
          handleSubmit,
          dirty,
        }) => {
          return (
            <Form>
              <Text fontSize="12px" margin="0 0 25px 0">
                Все поля формы обязательны для заполнения!!!
              </Text>
              <Flex direction="column" width="87%">
                <MyTextInput name="firstName" label="Имя:"></MyTextInput>
              </Flex>

              <hr />

              <Button
                type="submit"
                onClick={handleSubmit}
                // disabled={!isValid && !dirty}
                >
                Далее
              </Button>
            </Form>
          );
        }}
      </Formik>
    </StyledFormOwnData>
  );
};

export default FormCreditCard;

const StyledFormOwnData = styled.div`
  ${Button} {
    margin-top: 20px;
    margin-left: 275px;
  }
`;
