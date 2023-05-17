import styled from "styled-components";

const StyledMap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const Loading = styled.p`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

export { StyledMap, Loading };
