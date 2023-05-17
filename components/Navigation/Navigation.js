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
        <NavLink isactive={activePage === "/" ? "on" : "off"} href="/">
          <MapIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "/routes" ? "on" : "off"}
          href="/routes"
        >
          <RouteIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "/routes/favorites" ? "on" : "off"}
          href="/routes/favorites"
        >
          <StarIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "/profile" ? "on" : "off"}
          href="/profile"
        >
          <BikeIcon />
        </NavLink>
      </Nav>
    </Footer>
  );
}
