import styled, { css } from "styled-components";

const Form = styled.form`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  background-color: white;
  ${(props) =>
    props.savedRoute
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: none;
        `}
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

export { Form, Fieldset };
