import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
input,
textarea,
select,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}
html {
  font-size: 10px;
  height: 100%;
}
body {
  font-family: sans-serif;
  font-size: 1.6rem;
  height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colorBody};
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
hr {
    display: block;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colorGreyLight};
    /* margin-top: 1.5rem; */
    /* margin-bottom: 1.5rem; */
  }
`;
