import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import  store  from "./redux/store";
import { ThemeProvider } from "styled-components";
import * as theme from "./config/theme";
import { GlobalStyles } from "./styles-general/Global";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";
import { ContentWrapper, AppWrapper } from "./styles-general/ContentWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppWrapper>
          <Header />
          <ContentWrapper>
            <Routing />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
