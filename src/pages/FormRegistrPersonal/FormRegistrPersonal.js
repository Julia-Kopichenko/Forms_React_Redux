import React from "react";
import styled from "styled-components";
import FormWrapper from "../../components/FormWrapper";
import { FormTitle } from "../../components/Typography/Typography";
import { Outlet, useLocation } from "react-router-dom";
import { PATH_NAME } from "../../constants/pathNames";

const FormRegistrPersonal = () => {
  const url = useLocation().pathname;
  const isPersonalDataPage = url === PATH_NAME.registration_personal;
  const isCreditCardDataPage = url === PATH_NAME.registration_personal_card;
  const isResultDataPage = url === PATH_NAME.registration_personal_result;

  return (
    <StyledFormRegPersonal>
      <FormWrapper>
        <FormTitle>Типовая форма</FormTitle>
        <MyTabList>
          <MyTab className={isPersonalDataPage && "is-selected"}>
            Личные данные
          </MyTab>
          <MyTab className={isCreditCardDataPage && "is-selected"}>
            Данные кредитной карты
          </MyTab>
          <MyTab className={isResultDataPage && "is-selected"}>Результат</MyTab>
        </MyTabList>
        <hr />
        <MyContent>
          <Outlet />
        </MyContent>
      </FormWrapper>
    </StyledFormRegPersonal>
  );
};
export default FormRegistrPersonal;

const MyTabList = styled.ul`
  display: flex;
  margin: 0;
`;
const MyTab = styled.li`
  background-color: ${({ theme }) => theme.colorWhite};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colorGreyLight};
  padding: 15px 0;
  margin-right: 60px;
  &.is-selected {
    color: ${({ theme }) => theme.colorGreen};
    border-bottom: 4px solid ${({ theme }) => theme.colorGreen};
  }
`;
const MyContent = styled.div`
  height: 100%;
  padding: 20px 0;
`;
const StyledFormRegPersonal = styled.div`
  ${FormWrapper} {
    margin-top: 35px;
    padding: 40px 0;
  }
  ${FormTitle},
  ${MyTabList},
  ${MyContent} {
    padding: 0 50px;
  }
  ${FormTitle} {
    margin-bottom: 25px;
  }
  ${MyContent} {
    padding-top: 35px;
  }
`;
