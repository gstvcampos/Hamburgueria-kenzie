import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-white: #FFFFFF;
    --color-grey-600: #333333;
    --color-grey-300: #828282;
    --color-grey-100: #E0E0E0;
    --color-grey-000: #F5F5F5;
    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

`