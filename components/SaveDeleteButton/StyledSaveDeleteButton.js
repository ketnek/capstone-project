import styled from "styled-components";

export default styled.button`
  font-weight: bold;
  font-size: 1rem;
  color: var(--white);
  border: none;
  padding: 0.2rem 0.3rem;
  border-radius: 5px;
  background-color: ${(prop) => (prop.name === "Save" ? "limegreen" : "red")};

  &:active {
    transform: scale(0.95);
  }
`;
