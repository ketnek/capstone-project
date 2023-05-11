import "mapbox-gl/dist/mapbox-gl.css";
import Control from "../Control/Control";
import SearchBar from "../SearchBar/SearchBar";
import { StyledMap, Loading } from "./StyledMap";
import { useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import RouteForm from "../RouteForm/RouteForm";

import drawRouteOnMap from "@/lib/drawRouteOnMap";

// Change Token before git push!!!
const accessToken =
  "pk.eyJ1Ijoia2V0bmVrIiwiYSI6ImNsaDY5MG1rdjAzdGQzZW5zanhqbWU5cmoifQ.jOgkeSYbOWlO7yvv_sA0Dg";

export default function Map({ map }) {
  const mapContainer = useRef(null);

  mapboxgl.accessToken = accessToken;

  //Map and Markers
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [10.000654, 53.550341],
      zoom: 9,
    });

    map.current.on("click", function (event) {
      const markerCoords = [event.lngLat.lng, event.lngLat.lat];
      setRouteCoords((prevCoords) => [...prevCoords, markerCoords]);
      const marker = new mapboxgl.Marker()
        .setLngLat(markerCoords)
        .addTo(map.current);

      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    });
  }, []);

  useEffect(() => {
    if (!isLoading && directionsData !== null) {
      // Get the coordinates from the response
      const coords = directionsData.routes[0].geometry;
      // Draw the route on the map
      drawRouteOnMap(coords, map);
    }
  }, [isLoading, directionsData]);

  return (
    <>
      {isLoading && <Loading>Loading...</Loading>}
      <StyledMap ref={mapContainer} />
      {markers.length !== 0 && (
        <Control
          markers={markers}
          isLoading={isLoading}
          calculated={calculated}
          onSave={handleSaveClick}
          onCreate={handleCreateClick}
          onDelete={handleDeleteClick}
        />
      )}
      {markers.length === 0 && (
        <SearchBar
          searchValue={searchValue}
          searchResults={searchResults}
          inputPlaceholder={inputPlaceholder}
          onInputChange={handleInputChange}
          onClickResult={handleResultClick}
          onSearchSubmit={handleSearchSubmit}
        />
      )}

      <RouteForm
        savedRoute={savedRoute}
        onCancelClick={handleCancelClick}
        onRouteSubmit={handleRouteSubmit}
      />
    </>
  );
}
