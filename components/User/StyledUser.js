import Image from "next/image";
import styled from "styled-components";
import { MdOutlinePedalBike } from "react-icons/md";

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  margin-top: 3rem;
  object-fit: cover;
  box-shadow: 0 0 8px 1px var(--dark-gray);
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const BikeIcon = styled(MdOutlinePedalBike)`
  margin-top: 0.5rem;
  height: 2rem;
  width: 2rem;
  border-bottom: 2px solid var(--dark-gray);
`;

const Table = styled.table`
  width: 80%;
  margin-top: 1.5rem;
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

export {
  ProfilePicture,
  UserName,
  BikeIcon,
  Table,
  TableHeadline,
  TBody,
  TProp,
  TValue,
};
