import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  margin: 1.4rem 0 1.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;

const Item = styled.li`
  list-style: none;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px;
  position: relative;
`;

const HeadlineContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Headline = styled.h2`
  font-size: 1.2rem;
  align-self: flex-start;
`;

const RouteLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--dark-gray);
`;

const RouteImage = styled(Image)`
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Info = styled.p`
  font-size: 0.9rem;
  margin: 0.8rem 0;
  padding: 0 0.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px;
`;

export {
  Info,
  List,
  Item,
  Details,
  Headline,
  RouteLink,
  RouteImage,
  HeadlineContainer,
};
