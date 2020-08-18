import { createGlobalStyle } from "styled-components"
import { Media, FontSize } from "./const"
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 120px 20px 0;
    font-family: 'Montserrat';
    @media ${Media.TABLET} {
      padding: 120px 30px 0;
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
    font-size: ${FontSize.TEXT_NORMAL};
  }
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
