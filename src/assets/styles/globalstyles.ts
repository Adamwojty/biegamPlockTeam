import { createGlobalStyle } from "styled-components"
import { Media } from "./const"
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 30px 20px;
    font-family: 'Montserrat';
    @media ${Media.TABLET} {
      padding: 30px 50px;
    }
  }
  a {
    text-decoration: none;
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
