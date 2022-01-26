import React from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import FormWrapper from "../../components/FormWrapper";
import FormOwnData from "./FormOwnData/FormOwnData";

const FormRegistrPersonal = () => {
  return (
    <StyledFormRegPersonal>
      <FormWrapper>
        <FormTitle>Типовая форма</FormTitle>

        <STabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected">
          <STabList>
            <STab>Личные данные</STab>
            <STab>Данные кредитной карты</STab>
            <STab>Результат</STab>
          </STabList>
          <Hr />
          <STabPanel><FormOwnData /></STabPanel>
          <STabPanel>Panel 2</STabPanel>
          <STabPanel>Panel 3</STabPanel>
        </STabs>
      </FormWrapper>
    </StyledFormRegPersonal>
  );
};

export default FormRegistrPersonal;

const STabs = styled(Tabs)``;

const STabList = styled(TabList)`
  display: flex;
  margin: 0;
`;
STabList.tabsRole = "TabList";

const STab = styled(Tab)`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.grey};
  padding: 15px 0;
  margin-right: 60px;
  cursor: pointer;
  user-select: none;

  &.is-selected {
    color: ${({ theme }) => theme.colors.green};
    border-bottom: 4px solid ${({ theme }) => theme.colors.green};
  }

  &:focus {
    outline: none;
  }
`;
STab.tabsRole = "Tab";

const STabPanel = styled(TabPanel)`
  display: none;
  height: 100%;
  padding: 20px 0;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = "TabPanel";


const Hr = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;

const FormTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;

const StyledFormRegPersonal = styled.div`
  ${FormWrapper} {
    margin-top: 35px;
    padding: 40px 0;
  }
  ${FormTitle},
  ${STabList},
  ${STabPanel} {
    padding: 0 40px;
  }
  ${FormTitle} {
    margin-bottom: 25px;
  }
  ${STabPanel} {
    padding-top: 40px;
  }
`;
