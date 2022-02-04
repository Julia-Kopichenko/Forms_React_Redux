import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsAvailablePage, setOwnData } from "../../../redux/actionCreators";
import * as yup from "yup";
// import RadioButton from "../../../components/RadioButton";
import styled from "styled-components";
import { Button } from "../../../components/Forms/Button";
import { MyTextInput } from "../../../components/Forms/TextInput";
import { Text } from "../../../components/Typography/Typography";
import { Flex } from "../../../components/Flex";
import { PATH_NAME } from "../../../constants/pathNames";

const FormOwnData = () => {
  const dispatch = useDispatch();
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
        initialValues={useSelector((store) => store.userOwnData)}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(setIsAvailablePage("creditCardDataPage", true));
          dispatch(setOwnData(values));
          navigate(PATH_NAME.registration_personal_card);
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
                <MyTextInput name="lastName" label="Фамилия:"></MyTextInput>
                <MyTextInput name="patronymic" label="Отчество:"></MyTextInput>
              </Flex>

              <hr />

              <Button type="submit" onClick={handleSubmit}>
                Далее
              </Button>
            </Form>
          );
        }}
      </Formik>
    </StyledFormOwnData>
  );
};

export default FormOwnData;

const StyledFormOwnData = styled.div`
  ${Button} {
    margin-top: 20px;
    margin-left: 275px;
  }
`;

// const StyledInput = styled.input`
//   width: 300px;
//   height: 35px;
//   border: 1px solid #ccc;
//   background-color: #fff;
//   border-radius: 5px;
// `;

// export const MyInput = ({ field, ...props }) => {
//   return <StyledInput {...field} {...props} />;
// };

// touched - параметр, кот. показывает взаимодействовали ли мы с полем ранее
// handleChange - вызыв. каждый раз, когда мы меняем значение формы
// handleBlur - вызыв. каждый раз, когда мы уходим из значения формы
// handleSubmit - привязывается к кнопке отправки формы, он б-т вызывать функцию onSubmit
// isValid - говорит валидна ли форма в данный момент или нет
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
