import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
}
section{
    width: 100vw;
  height: 100vh;
}

/* reusable components */
.main-heading {
    margin: 1.5rem 0;
    font-size: 2.5rem;
    text-align: center;
    text-transform: uppercase;
  }
  .sub-heading {
    margin: 2rem 0;
    font-size: 2rem;
    text-align: center;
    span {
      color: red;
      text-transform: uppercase;
    }
  }
a{
  text-decoration: none;
      color: black;
      &:visited {
        color: red;
      }
}
`;
