import Link from "next/link";
import {
  BikeIcon,
  Footer,
  Header,
  Headline,
  MapIcon,
  Nav,
  NavLink,
  RouteIcon,
  StarIcon,
} from "./StyledLayout";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Headline>Map</Headline>
      </Header>
      <main>{children}</main>
      <Footer>
        <Nav>
          <NavLink href="#">
            <MapIcon />
          </NavLink>

          <NavLink href="#">
            <RouteIcon />
          </NavLink>

          <NavLink href="#">
            <StarIcon />
          </NavLink>

          <NavLink href="#">
            <BikeIcon />
          </NavLink>
        </Nav>
      </Footer>
    </>
  );
}
