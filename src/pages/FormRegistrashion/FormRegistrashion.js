import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setIsPersonalPage } from "../../redux/actionCreators";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Button } from "../../components/Forms/Button";
import { Text } from "../../components/Typography/Typography";
import RadioButton from "../../components/Forms/RadioButton";
import FormWrapper from "../../components/FormWrapper";
import { PATH_NAME } from "../../constants/pathNames";

const FormRegistrashion = () => {
  const dispatch = useDispatch();

  const url = useLocation();
  const navigate = useNavigate();
  return (
    <StyledFormRegistrashion>
      <FormWrapper width="300px">
        <Text>Выберите способ регистрации:</Text>
        <Formik
          initialValues={{ picked: "personal" }}
          onSubmit={({ picked }) => {
            {
              picked === "personal" &&
                dispatch(setIsPersonalPage(true)) &&
                navigate(PATH_NAME.registration_personal);
            }
            {
              picked === "public" && navigate("/registration/public");
            }
          }}>
          {({ values }) => {
            return (
              <Form>
                <RadioButton
                  value="personal"
                  label="Персональная"
                  name="picked"
                />
                <RadioButton
                  value="public"
                  label="Регистрация пользователей списком"
                  name="picked"
                />
                {values.picked === "public" && (
                  <div className="list">Загрузить список</div>
                )}
                <Button type="submit">Далее</Button>
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </StyledFormRegistrashion>
  );
};
export default FormRegistrashion;

export const StyledFormRegistrashion = styled.div`
  ${FormWrapper} {
    margin: 0 auto;
    margin-top: 70px;
    padding: 65px 60px;
  }
  ${Text} {
    margin-bottom: 20px;
  }
  & form {
    padding-left: 20px;
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
