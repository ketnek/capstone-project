import styled from "styled-components";
import { MdArrowBackIosNew, MdEditNote, MdOutlineClear } from "react-icons/md";

const HeadlineContainer = styled.div`
  width: 85%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Headline = styled.h2`
  font-size: 1.1rem;
`;

const BackButton = styled.button`
  position: absolute;
  top: 0.4rem;
  left: 1rem;
  z-index: 3;
  background-color: var(--orange);
  border: none;
`;

const BackIcon = styled(MdArrowBackIosNew)`
  height: 1.2rem;
  width: 1.2rem;

  color: var(--white);
`;

const EditButton = styled.button`
  position: absolute;
  top: 0.2rem;
  right: 1rem;
  z-index: 3;
  background-color: var(--orange);
  border: none;
`;

const EditIcon = styled(MdEditNote)`
  height: 1.5rem;
  width: 1.5rem;
  color: var(--white);
`;

const CancelIcon = styled(MdOutlineClear)`
  height: 1.5rem;
  width: 1.5rem;
  color: var(--white);
`;

const NotesContainer = styled.div`
  width: 85%;
  height: 12rem;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: var(--light-gray);
`;

const Notes = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 0.9rem;
`;

export {
  Notes,
  BackIcon,
  EditIcon,
  Headline,
  BackButton,
  EditButton,
  CancelIcon,
  NotesContainer,
  HeadlineContainer,
};
