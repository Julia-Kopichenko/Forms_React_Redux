import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
// import { theme } from "./styles-general/Theme";
import * as theme from './config/theme'
import { GlobalStyles } from "./styles-general/Global";
import App from "./components/App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <Provider store={store}>
//     <ErrorBoundary>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Routing />
//       </ThemeProvider>
//     </ErrorBoundary>
//   </Provider>,
//   document.getElementById("root")
// );
