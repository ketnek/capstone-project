import {
  Nav,
  Footer,
  NavLink,
  MapIcon,
  StarIcon,
  BikeIcon,
  RouteIcon,
} from "./StyledNavigation";

export default function Navigation({ activePage }) {
  return (
    <Footer>
      <Nav>
        <NavLink isactive={activePage === "/" ? "true" : "false"} href="/">
          <MapIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "/routes" ? "true" : "false"}
          href="/routes"
        >
          <RouteIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "/routes/favorites" ? "true" : "false"}
          href="/routes/favorites"
        >
          <StarIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "/profile" ? "true" : "false"}
          href="/profile"
        >
          <BikeIcon />
        </NavLink>
      </Nav>
    </Footer>
  );
}
