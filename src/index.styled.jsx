import { css } from "@emotion/react";
import bg from "./components/Images/4.jpg";
// const bg = Bg;

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Sarabun", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // background-color: #f2f2f2;
    min-height: 100vh;
    color: white;
    background-image: url(${bg});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;
