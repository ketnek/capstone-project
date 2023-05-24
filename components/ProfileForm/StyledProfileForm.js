import Image from "next/image";
import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px var(--dark-gray);
`;

const Fieldset = styled.fieldset`
  display: flex;
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

export { Form, Fieldset, Legend, FilePreview };
