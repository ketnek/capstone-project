import styled from "styled-components";

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  & .mapboxgl-ctrl-bottom-left {
    top: 0.2rem;
  }
`;

const Loading = styled.p`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

export { StyledMap, Loading };
