import styled from "styled-components";

const PageHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--orange);
  border-bottom: 2px solid black;
`;

const Headline = styled.h1`
  font-size: 1.3rem;
  margin: 0;
`;

export { PageHeader, Headline };
