import { createGlobalStyle } from "styled-components";
import "./swiper.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  :focus {
    outline: transparent
  }

  body {
    background: ${(props) => props.theme.DARK_400};
  }

  h1, h2, h3, strong {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  p, input, label, a {
    font-family: "Roboto", sans-serif;
  }

  button {
    font-family: "Poppins", sans-serif;
  }



`;
