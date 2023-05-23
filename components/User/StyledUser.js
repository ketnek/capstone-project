import Image from "next/image";
import styled from "styled-components";

const ProfilePicture = styled(Image)`
  display: block;
  border-radius: 50%;
  margin-top: 2rem;
  box-shadow: 0 0 10px 1px var(--orange);
  object-fit: cover;
`;
const UserName = styled.p`
  font-weight: bold;
`;

export { ProfilePicture, UserName };
