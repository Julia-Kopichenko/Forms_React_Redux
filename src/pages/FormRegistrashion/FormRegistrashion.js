import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";

import RadioButton from "../../components/RadioButton";
import Button from "../../components/Buttons";
import FormWrapper from "../../components/FormWrapper";

const FormRegistrashion = () => {
  const navigate = useNavigate();

  return (
    <StyledFormRegistrashion>
      <FormWrapper width="300px">
        <FormTitle>Выберите способ регистрации:</FormTitle>

        <Formik
          initialValues={{ picked: "personal" }}
          onSubmit={({ picked }) => {
            {
              picked === "personal" && navigate("/registration/personal");
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

const FormTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.6px;
`;

export const StyledFormRegistrashion = styled.div`
  ${FormWrapper} {
    margin: 0 auto;
    margin-top: 70px;
    padding: 65px 60px;
  }
  ${FormTitle} {
    margin-bottom: 20px;
  }
  & form {
    padding-left: 20px;
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
