import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
// import RadioButton from "../../../components/RadioButton";
import styled from "styled-components";
import { Button } from "../../../components/Forms/Button";
import { Label } from "../../../components/Forms/Label";
import { MyInput, MyTextInput } from "../../../components/Forms/TextInput";
import { Text } from "../../../components/Typography/Typography";
import { Flex } from "../../../components/Flex";

const FormCreditCard = () => {
  
  return (
   <h1>FORM CREDIT CARD</h1>
  );
};

export default FormCreditCard;


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
