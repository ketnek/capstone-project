import Image from "next/image";
import styled, { css } from "styled-components";

const Form = styled.form`
  position: absolute;
  width: 95%;
  top: 4.7rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px;
  background-color: var(--white);
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
  border: none;
  margin-top: 1rem;
`;

const Legend = styled.legend`
  padding: 0;
  font-weight: bold;
  font-size: 1.3rem;
`;

const Description = styled.p`
  margin: 0;
`;

const Label = styled.label`
  font-weight: bold;
  margin: 1rem 0 0.5rem 0;
`;

const RouteInput = styled.input`
  border: none;
  height: 2rem;
  padding-left: 0.5rem;
  border-radius: 10px;
  background-color: var(--light-gray);
`;

const NotesTextarea = styled.textarea`
  border: none;
  height: 4rem;
  border-radius: 10px;
  font-family: inherit;
  padding: 0.5rem;
  background-color: var(--light-gray);
`;

const FilePreview = styled(Image)`
  object-fit: cover;
  margin: 1rem auto 0 auto;
  border-radius: 10px;
`;

const FileInput = styled.input``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
`;

const FormButton = styled.button`
  width: 5rem;
  height: 1.5rem;
  margin: 0.5rem 0 0.5rem 0;
  border: none;
  color: var(--white);
  font-weight: bold;
  border-radius: 5px;
  background-color: var(--orange);
`;

export {
  Form,
  Label,
  Legend,
  Fieldset,
  FileInput,
  RouteInput,
  FormButton,
  Description,
  FilePreview,
  NotesTextarea,
  ButtonContainer,
};
