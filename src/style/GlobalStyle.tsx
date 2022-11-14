import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables}

* {
    font-family: "Inter",sans-serif;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
