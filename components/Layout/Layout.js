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
          <NavLink href="/">
            <MapIcon />
          </NavLink>

          <NavLink href="/routes">
            <RouteIcon />
          </NavLink>

          <NavLink href="/routes/favorites">
            <StarIcon />
          </NavLink>

          <NavLink href="/profile">
            <BikeIcon />
          </NavLink>
        </Nav>
      </Footer>
    </>
  );
}
