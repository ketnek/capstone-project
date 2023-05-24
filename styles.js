import { createGlobalStyle } from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default createGlobalStyle`

/* color variables */

:root {
  --font-family:${roboto.style.fontFamily};
  --orange: #FF4A11;
  --dark-gray: #252629;
  --white: white;
  --light-gray: #F2F5F9;
  --icon-height: 1.5rem;
  --icon-width: 1.5rem; 
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-family);
  color: var(--dark-gray);
}

`;
