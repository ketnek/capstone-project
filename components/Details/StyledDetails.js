import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";

const Headline = styled.h2`
  font-size: 1.1rem;
  align-self: flex-start;
  margin: 1.5rem 0 1rem 2rem;
`;

const BackButton = styled.button`
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  z-index: 3;
  background-color: var(--orange);
  border: none;
`;

const BackIcon = styled(MdArrowBackIosNew)`
  height: 25px;
  width: 25px;
  color: var(--white);
`;

const NotesContainer = styled.div`
  width: 85%;
  height: 12rem;
  background-color: var(--light-gray);
  border-radius: 10px;
`;

export { Headline, BackButton, BackIcon, NotesContainer };
