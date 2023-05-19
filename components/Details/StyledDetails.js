import styled from "styled-components";
import { MdArrowBackIosNew, MdEditNote, MdOutlineClear } from "react-icons/md";

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

const EditButton = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 1rem;
  z-index: 3;
  background-color: var(--orange);
  border: none;
`;

const EditIcon = styled(MdEditNote)`
  height: 35px;
  width: 35px;
  color: var(--white);
`;

const CancelIcon = styled(MdOutlineClear)`
  height: 35px;
  width: 35px;
  color: var(--white);
`;

const NotesContainer = styled.div`
  width: 85%;
  height: 12rem;
  overflow: scroll;
  border-radius: 10px;
  background-color: var(--light-gray);
`;

export {
  Headline,
  BackButton,
  BackIcon,
  EditButton,
  EditIcon,
  CancelIcon,
  NotesContainer,
};
