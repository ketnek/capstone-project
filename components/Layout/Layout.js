import { useState } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  const [activePage, setActivePage] = useState("Map");

  function handleMapIconClick() {
    setActivePage("Map");
  }
  function handleRouteIconClick() {
    setActivePage("Routes");
  }
  function handleStarIconClick() {
    setActivePage("Favorites");
  }
  function handleBikeIconClick() {
    setActivePage("Profile");
  }

  return (
    <>
      <Header activePage={activePage} />
      <main>{children}</main>
      <Navigation
        activePage={activePage}
        onMapIconClick={handleMapIconClick}
        onRouteIconClick={handleRouteIconClick}
        onStarIconClick={handleStarIconClick}
        onBikeIconClick={handleBikeIconClick}
      />
    </>
  );
}
