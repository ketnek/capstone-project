import Image from "next/image";
import styled from "styled-components";

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  margin-top: 2rem;
  object-fit: cover;
  box-shadow: 0 0 8px 1px var(--dark-gray);
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Table = styled.table`
  width: 80%;
  margin-top: 4rem;
  background-color: var(--orange);
  box-shadow: 0 0 10px 1px var(--dark-gray);
`;

const TableHeadline = styled.thead`
  color: var(--white);
  margin: 0.3rem;
  font-size: 1.2rem;
`;

const TBody = styled.tbody`
  background-color: var(--light-gray);
`;

const TProp = styled.td`
  font-weight: bold;
  padding: 0.3rem 0 0.3rem 0.5rem;
`;
const TValue = styled.td`
  padding-left: 1.5rem;
`;

export { ProfilePicture, UserName, Table, TableHeadline, TBody, TProp, TValue };
