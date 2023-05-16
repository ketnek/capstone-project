import styled from "styled-components";
import { IoBicycle, IoMapOutline } from "react-icons/io5";
import { FaRoute, FaRegStar } from "react-icons/fa";
import Link from "next/link";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--orange);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: ${(props) =>
    props.isactive === "on" ? "var(--dark-gray)" : "var(--white)"};
`;

const MapIcon = styled(IoMapOutline)`
  height: var(--icon-height);
  width: var(--icon-width);
`;
const RouteIcon = styled(FaRoute)`
  height: var(--icon-height);
  width: var(--icon-width);
`;
const StarIcon = styled(FaRegStar)`
  height: var(--icon-height);
  width: var(--icon-width);
`;
const BikeIcon = styled(IoBicycle)`
  height: var(--icon-height);
  width: var(--icon-width);
`;

export { Footer, Nav, NavLink, MapIcon, RouteIcon, StarIcon, BikeIcon };