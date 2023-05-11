import styled from "styled-components";

const Form = styled.form`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  background-color: white;
  display: ${(props) => (props.savedRoute ? "flex" : "none")};
  flex-direction: column;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

export { Form, Fieldset };
