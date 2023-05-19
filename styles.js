import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

/* color variables */

:root {
  --orange: #FF4A11;
  --dark-gray: #252629;
  --white: white;
  --light-gray: #F2F5F9;
  --icon-height: 2.5rem;
  --icon-width: 2.5rem; 
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    color: var(--dark-gray);
  }

`;
