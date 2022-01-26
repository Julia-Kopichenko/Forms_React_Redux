import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles-general/Global";
import { theme } from "../../styles-general/Theme";
import { Container } from "../styles/Container.styled";
// import { AppWrapper } from "../styles/AppWrapper.styled";

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
import { Flex } from "../Flex";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Container>
          <Flex direction="column">
            <Header />
            <Routes>
              <Route path="/" element={<Page1 />} />
              <Route path="/point2" element={<FormRegistrPersonal />} />
              <Route path="/point3" element={<Page3 />} />
              <Route path="/registration" element={<FormRegistrashion />} />
              <Route
                path="/registration/personal"
                element={<FormRegistrPersonal />}
              />
              <Route
                path="/registration/public"
                element={<FormRegistrPersonal />}
              />
              <Route path="/point5" element={<Page5 />} />
            </Routes>
            <Footer />
          </Flex>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
