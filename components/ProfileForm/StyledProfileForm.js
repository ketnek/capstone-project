import Image from "next/image";
import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px var(--dark-gray);
`;

const Fieldset = styled.fieldset`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  border: none;
`;

const Legend = styled.legend`
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const FilePreview = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  align-self: center;
`;

const SubmitButton = styled.button`
  border: none;
  font-weight: bold;
  height: 1.3rem;
  width: 4rem;
  color: var(--white);
  border-radius: 10px;
  background-color: var(--orange);
`;

export { Form, Fieldset, Legend, FilePreview, SubmitButton };
