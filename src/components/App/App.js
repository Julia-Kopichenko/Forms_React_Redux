import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
} from "../../pages";
import Header from "../Header";
import Footer from "../Footer";

import { ContentWrapper } from "../../styles-general/ContentWrapper.styled";

const App = () => {
  const isPersonalPage = useSelector((store) => store.isPersonalPage)
  console.log(isPersonalPage);
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
            {isPersonalPage && (
              <Route
                path={PATH_NAME.registration_personal}
                element={<FormRegistrPersonal />}
              />
            )}
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
