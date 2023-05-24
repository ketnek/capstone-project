import {
  Nav,
  Footer,
  NavLink,
  MapIcon,
  StarIcon,
  BikeIcon,
  RouteIcon,
  LinkName,
} from "./StyledNavigation";

export default function Navigation({ activePage }) {
  return (
    <Footer>
      <Nav>
        <NavLink isactive={activePage === "/" ? "true" : "false"} href="/">
          <MapIcon />
          <LinkName>Map</LinkName>
        </NavLink>

        <NavLink
          isactive={activePage === "/routes" ? "true" : "false"}
          href="/routes"
        >
          <RouteIcon />
          <LinkName>Routes</LinkName>
        </NavLink>

        <NavLink
          isactive={activePage === "/routes/favorites" ? "true" : "false"}
          href="/routes/favorites"
        >
          <StarIcon />
          <LinkName>Favorites</LinkName>
        </NavLink>

        <NavLink
          isactive={activePage === "/profile" ? "true" : "false"}
          href="/profile"
        >
          <BikeIcon />
          <LinkName>Profile</LinkName>
        </NavLink>
      </Nav>
    </Footer>
  );
}
