import React from "react";
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
} from "../../pages";
import Header from "../Header";
import Footer from "../Footer";

import { ContentWrapper } from "../../styles-general/ContentWrapper.styled";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path={PATH_NAME.point1} element={<Page1 />} />
            <Route path={PATH_NAME.point2} element={<FormRegistrPersonal />} />
            <Route path={PATH_NAME.point3} element={<Page3 />} />
            <Route path={PATH_NAME.point4} element={<FormRegistrashion />} />
            <Route
              path="/registration/personal"
              element={<FormRegistrPersonal />}
            />
            <Route
              path="/registration/public"
              element={<FormRegistrPersonal />}
            />
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
