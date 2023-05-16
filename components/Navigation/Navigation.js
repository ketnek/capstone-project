import {
  Footer,
  Nav,
  NavLink,
  MapIcon,
  RouteIcon,
  StarIcon,
  BikeIcon,
} from "./StyledNavigation";

export default function Navigation({
  activePage,
  onMapIconClick,
  onRouteIconClick,
  onStarIconClick,
  onBikeIconClick,
}) {
  return (
    <Footer>
      <Nav>
        <NavLink
          isactive={activePage === "Map" ? "on" : "off"}
          onClick={onMapIconClick}
          href="/"
        >
          <MapIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "Routes" ? "on" : "off"}
          onClick={onRouteIconClick}
          href="/routes"
        >
          <RouteIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "Favorites" ? "on" : "off"}
          onClick={onStarIconClick}
          href="/routes/favorites"
        >
          <StarIcon />
        </NavLink>

        <NavLink
          isactive={activePage === "Profile" ? "on" : "off"}
          onClick={onBikeIconClick}
          href="/profile"
        >
          <BikeIcon />
        </NavLink>
      </Nav>
    </Footer>
  );
}
