import React from "react";

import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const STabs = styled(Tabs)``;

const STabList = styled(TabList)`
  display: flex;
  margin: 0;
`;
STabList.tabsRole = "TabList";

const STab = styled(Tab)`
  background-color: ${({ theme }) => theme.colorWhite};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colorGrey};
  padding: 15px 30px;
  cursor: pointer;
  user-select: none;

  &.is-selected {
    color: ${({ theme }) => theme.colorGreen};
    border-bottom: 4px solid ${({ theme }) => theme.colorGreen};
  }

  &:focus {
    outline: none;
  }
`;
STab.tabsRole = "Tab";

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 20px 0;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = "TabPanel";

const Page3 = () => (
  <STabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected">
    <STabList>
      <STab>Личные данные</STab>
      <STab>Данные кредитной карты</STab>
      <STab>Результат</STab>
    </STabList>
    <STabPanel>Panel 1</STabPanel>
    <STabPanel>Panel 2</STabPanel>
    <STabPanel>Panel 3</STabPanel>
  </STabs>
);
export default Page3;
