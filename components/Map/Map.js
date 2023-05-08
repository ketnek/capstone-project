import "mapbox-gl/dist/mapbox-gl.css";
import Control from "../Control/Control";
import SearchBar from "../SearchBar/SearchBar";
import { StyledMap, Loading } from "./StyledMap";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// Change Token before git push!!!
const accessToken =
  "pk.eyJ1Ijoia2V0bmVrIiwiYSI6ImNsaGVpOW12dTFnZDYzbHBjMW55MzB1OHAifQ.2uXb_LUTS_awLF8Y91dVgQ";

export default function Map() {
  const map = useRef(null);
  const mapContainer = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newRouteData, setNewRouteData] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [routeCoords, setRouteCoords] = useState([]);
  const [calculated, setCalculated] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [inputPlaceholder, setInputPlaceholder] = useState("Search for places");

  mapboxgl.accessToken = accessToken;

  //Map and Markers
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [10.000654, 53.550341],
      zoom: 9,
    });

    map.current.on("click", function (e) {
      const markerCoords = [e.lngLat.lng, e.lngLat.lat];
      setRouteCoords((prevCoords) => [...prevCoords, markerCoords]);
      const marker = new mapboxgl.Marker()
        .setLngLat(markerCoords)
        .addTo(map.current);

      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    });
  }, []);

  // Format the data for the Map Directions query
  function updateRoute() {
    const profile = "cycling";
    // Format the coordinates
    const newCoords = routeCoords.join(";");

    getMatch(
      `https://api.mapbox.com/directions/v5/mapbox/${profile}/${newCoords}?geometries=geojson&language=de&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
    );
  }

  // Make a Map Matching request
  async function getMatch(url) {
    setIsLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    setNewRouteData(data);

    // Handle errors
    if (!response) {
      alert(
        `${data.code} - ${data.message}.\n\nFor more information: https://docs.mapbox.com/api/navigation/map-matching/#map-matching-api-errors`
      );
      return;
    }

    // Get the coordinates from the response
    const coords = data.routes[0].geometry;

    // Draw the route on the map
    addRoute(coords);

    setCalculated(true);
    setIsLoading(false);
  }

  // Draw Route on the Map
  function addRoute(coords) {
    // If a route is already loaded, remove it
    if (map.current.getSource("route")) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }

    // Add a new layer to the map
    map.current.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: coords,
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#03AA46",
        "line-width": 8,
        "line-opacity": 0.8,
      },
    });
  }

  // Make a Geocoding request
  const getNewDestination = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Loading new destination went wrong!");
      }
      const data = await response.json();
      setSearchResults(data.features);
    } catch (error) {
      console.error(error);
    }
  };

  // all handler

  const handleCreateClick = () => {
    updateRoute();
  };

  const handleDeleteClick = () => {
    for (let marker of markers) {
      marker.remove();
    }
    if (map.current.getSource("route")) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }
    setMarkers([]);
    setRouteCoords([]);
    setNewRouteData({});
    setCalculated(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchValue === "") return;
    map.current.flyTo({ center: searchResults[0]?.center, zoom: 12 });

    setSearchValue("");
    setInputPlaceholder(searchResults[0]?.place_name);
  };

  const handleResultClick = (resultCoords, placeholderText) => {
    map.current.flyTo({ center: resultCoords, zoom: 12 });
    setInputPlaceholder(placeholderText);
    setSearchValue("");
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    getNewDestination(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?country=de&types=place,address,postcode,poi&language=de&access_token=${accessToken}`
    );
  };

  return (
    <>
      {isLoading && <Loading>Loading...</Loading>}
      <StyledMap ref={mapContainer} />
      {markers.length !== 0 && (
        <Control
          markers={markers}
          isLoading={isLoading}
          calculated={calculated}
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
    </>
  );
}
