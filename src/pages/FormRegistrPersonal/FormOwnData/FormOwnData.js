import React from "react";
import { Formik, Form } from "formik";
import { Field } from "formik";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsAvailablePage, setOwnData } from "../../../redux/actionCreators";
import * as yup from "yup";
import styled from "styled-components";
import { PATH_NAME } from "../../../constants/pathNames";

import { Flex } from "../../../components/Flex";
import { Text } from "../../../components/Typography/Typography";
import { Button } from "../../../components/Forms/Button";
import { Label } from "../../../components/Forms/Label";
import { MyTextInput } from "../../../components/Forms/TextInput";
import { MyTextarea } from "../../../components/Forms/Textarea";
import DatePickerField from "../../../components/Forms/DatePicker";
import RadioButton from "../../../components/Forms/RadioButton";

const MyField = (props) => {
  const {
    values: { textA, textB },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on textA and textB
    if (
      textA.trim() !== "" &&
      textB.trim() !== "" &&
      touched.textA &&
      touched.textB
    ) {
      setFieldValue(props.name, `textA: ${textA}, textB: ${textB}`);
    }
  }, [textB, textA, touched.textA, touched.textB, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phoneBelRegExp =
  /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/;

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
    address: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
    mothersSurname: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
    codeword: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
    info: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Заполните это поле"),
    dateOfBirthday: yup
      .date()
      .typeError("Должно быть дата")
      .required("Заполните это поле"),
    friendsEmail: yup
      .string()
      .email("Невалидный email адрес")
      .required("Заполните это поле"),
    phoneNumber: yup
      .string()
      .matches(phoneBelRegExp, "Невалидный номер телефона")
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
          {
            console.log(values.gender);
          }
          return (
            <Form>
              <Text fontSize="12px" margin="0 0 25px 0">
                Все поля формы обязательны для заполнения!!!
              </Text>
              {/*------------- ИМЯ----------------- */}
              <FieldWrapper>
                <Label htmlFor="firstName">Имя:</Label>
                <InputWrapper>
                  <Field name="firstName" component={MyTextInput} />
                </InputWrapper>
              </FieldWrapper>
              {/*------------- ФАМИЛИЯ----------------- */}
              <FieldWrapper>
                <Label htmlFor="lastName">Фамилия:</Label>
                <InputWrapper>
                  <Field name="lastName" component={MyTextInput} />
                </InputWrapper>
              </FieldWrapper>
              {/*------------- ОТЧЕСТВО----------------- */}
              <FieldWrapper>
                <Label htmlFor="patronymic">Отчество:</Label>
                <InputWrapper>
                  <Field name="patronymic" component={MyTextInput} />
                </InputWrapper>
              </FieldWrapper>
              {/*------------- ДАТА РОЖДЕНИЯ----------------- */}
              <FieldWrapper>
                <Label htmlFor="dateOfBirthday">Дата рождения:</Label>
                <InputWrapper>
                  <DatePickerField name="dateOfBirthday" />
                </InputWrapper>
              </FieldWrapper>
              {/*------------- ПОЛ----------------- */}
              <FieldWrapper>
                <Label htmlFor="dateOfBirthday">Пол:</Label>
                <InputWrapper>
                  <RadioButtonWrapper>
                    <RadioButton value="male" label="Мужской" name="gender" />
                    <RadioButton value="female" label="Женский" name="gender" />
                  </RadioButtonWrapper>
                </InputWrapper>
              </FieldWrapper>
              {/*------------- АДРЕС----------------- */}
              <FieldWrapper>
                <Label htmlFor="address">Адрес. Почтовый индекс:</Label>
                <InputWrapper>
                  <Field name="address" component={MyTextInput} />
                </InputWrapper>
                <TextWrapper>
                  <Text fontSize="10px" fontStyle="italic">
                    Узнать индекс
                  </Text>
                </TextWrapper>
              </FieldWrapper>
              {/*------------- ДЕВИЧЬЯ ФАМИЛИЯ МАТЕРИ----------------- */}
              <FieldWrapper>
                <Label htmlFor="mothersSurname">Девичья фамилия матери:</Label>
                <InputWrapper>
                  <Field name="mothersSurname" component={MyTextInput} />
                </InputWrapper>
              </FieldWrapper>
              {/*------------- КОДОВОЕ СЛОВО----------------- */}
              <FieldWrapper>
                <Label htmlFor="codeword">Кодовое слово в вашем банке:</Label>
                <InputWrapper>
                  <Field name="codeword" component={MyTextInput} />
                </InputWrapper>
              </FieldWrapper>
              {/*------------- КАК ВЫ УЗНАЛИ О БАНКЕ----------------- */}
              <FieldWrapper>
                <Label htmlFor="info">Как вы узнали о нашем сайте:</Label>
                <InputWrapper>
                  <Field name="info" component={MyTextarea} />
                </InputWrapper>
                <TextWrapper>
                  <Text fontSize="10px" fontStyle="italic">
                    Из газет, телевидения и пр.
                  </Text>
                </TextWrapper>
              </FieldWrapper>
              {/*------------- EMAIL----------------- */}
              <FieldWrapper>
                <Label htmlFor="friendsEmail">Email друга:</Label>
                <InputWrapper>
                  <Field name="friendsEmail" component={MyTextInput} />
                </InputWrapper>
              </FieldWrapper>
              {/*------------- НОМЕР ТЕЛЕФОНА----------------- */}
              <FieldWrapper>
                <Label htmlFor="phoneNumber">
                  {values.gender === "male" && "Номер телефона своей девушки: "}
                  {values.gender === "female" &&
                    "Номер телефона своего парня: "}
                </Label>
                <InputWrapper>
                  <Field name="phoneNumber" component={MyTextInput} />
                </InputWrapper>
                <TextWrapper>
                  <Text fontSize="10px" fontStyle="italic">
                    {values.gender === "male" && "Только белорусские номера"}
                    {values.gender === "female" && "Международный"}
                  </Text>
                </TextWrapper>
              </FieldWrapper>
              {/*------------- СКОВОРОДА/ФУТБОЛЬНАЯ КОМАНДА----------------- */}
              
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
// male ==> Номер телефона своей девушки, интересуют только белорусские номера (валидация)
// male ==> За какую футбольную команду болеешь (дропдаун с фильтром)

// female ==> Номер телефона своего парня в международном формате (валидация). Если номер не белорусский - следующее поле делаем disable, автоматом выбираем tefal
// female ==> Сковороду какой фирмы предпочитаешь (дропдаун с фильтром)
const StyledFormOwnData = styled.div`
  ${Button} {
    margin-top: 20px;
    margin-left: 275px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
`;
const TextWrapper = styled.div``;
const FieldWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: start;
  margin-bottom: 25px;
  ${Label} {
    flex-basis: 33%;
    padding: 7px 15px 7px 0;
  }
  ${InputWrapper} {
    flex-basis: 50%;
    margin-right: 30px;
    & .react-datepicker__input-container {
      width: 30%;
    }
  }
  ${TextWrapper} {
    flex-basis: 0;
  }
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  & > * {
    margin-right: 20px;
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
