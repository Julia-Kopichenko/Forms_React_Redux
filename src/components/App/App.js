import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { PATH_NAME } from "../../constants/pathNames";

import {
  Page1,
  Page2,
  Page3,
  Page5,
  FormRegistrashion,
  FormRegistrPersonal,
  FormOwnData,
  FormCreditCard,
  FormResults,
} from "../../pages";
import Header from "../Header";
import Footer from "../Footer";
import { ContentWrapper } from "../../styles-general/ContentWrapper.styled";

const PrivateRoute = ({ isAvailablePage, children, navigateTo }) => {
  return isAvailablePage ? children : <Navigate to={navigateTo} />;
};

const App = () => {
  const personalPage = useSelector(
    (store) => store.isAvailablePages.personalPage
  );
  console.log("personalPage", personalPage);
  const creditCardDataPage = useSelector(
    (store) => store.isAvailablePages.creditCardDataPage
  );
  console.log("creditCardDataPage", creditCardDataPage);
  const resultDataPage = useSelector(
    (store) => store.isAvailablePages.resultDataPage
  );
  console.log("resultDataPage", resultDataPage);

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path={PATH_NAME.point1} element={<Page1 />} />
            <Route path={PATH_NAME.point2} element={<Page2 />} />
            <Route path={PATH_NAME.point3} element={<Page3 />} />
            <Route
              path={PATH_NAME.registration}
              element={<FormRegistrashion />}
            />
            <Route
              path={PATH_NAME.registration_personal}
              element={
                <PrivateRoute
                  isAvailablePage={personalPage}
                  navigateTo={PATH_NAME.registration}>
                  <FormRegistrPersonal />
                </PrivateRoute>
              }>

              <Route index element={<FormOwnData />} />

              <Route
                path={PATH_NAME.registration_personal_card}
                element={
                  <PrivateRoute
                    isAvailablePage={creditCardDataPage}
                    navigateTo={PATH_NAME.registration_personal}>
                    <FormCreditCard />
                  </PrivateRoute>
                }
              />
              <Route
                path={PATH_NAME.registration_personal_result}
                element={<FormResults />}
              />
            </Route>
            <Route path={PATH_NAME.point5} element={<Page5 />} />
            <Route path="*" element={<Navigate to={PATH_NAME.point1} />} />
          </Routes>
        </ContentWrapper>

        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  & footer {
    margin-top: auto;
  }
`;
