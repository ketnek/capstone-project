import Map from "../Map/Map";
import "mapbox-gl/dist/mapbox-gl.css";
import postData from "@/lib/postData";
import createDbData from "@/lib/createDbData";
import drawRouteOnMap from "@/lib/drawRouteOnMap";
import coordsToString from "@/lib/coordsToString";
import { useRef, useState, useEffect } from "react";
import { useGeocodingApi } from "@/hooks/useGeocodingApi";
import { useDirectionsApi } from "@/hooks/useDirectionsApi";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// Change Token before git push!!!
const accessToken =
  "pk.eyJ1Ijoia2V0bmVrIiwiYSI6ImNsaDY5MG1rdjAzdGQzZW5zanhqbWU5cmoifQ.jOgkeSYbOWlO7yvv_sA0Dg";

export default function MapHandler() {
  const map = useRef(null);
  const mapContainer = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [routeCoords, setRouteCoords] = useState([]);
  const [calculated, setCalculated] = useState(false);
  const [savedRoute, setSavedRoute] = useState(false);
  const { searchResults, getGeocodingData } = useGeocodingApi();
  const [inputPlaceholder, setInputPlaceholder] = useState("Search for places");
  const { isLoading, directionsData, setDirectionsData, getDirectionsData } =
    useDirectionsApi();

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

  // all handler

  function handleCreateClick() {
    const coordsString = coordsToString(routeCoords);
    getDirectionsData(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${coordsString}?geometries=geojson&language=de&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
    );
    setCalculated(true);
  }

  function handleSaveClick() {
    setSavedRoute(true);
  }
  function handleCancelClick() {
    setSavedRoute(false);
  }

  function handleDeleteClick() {
    if (savedRoute) {
      setSavedRoute(false);
    } else {
      for (let marker of markers) {
        marker.remove();
      }
      if (map.current.getSource("route")) {
        map.current.removeLayer("route");
        map.current.removeSource("route");
      }
      setMarkers([]);
      setRouteCoords([]);
      setDirectionsData(null);
      setCalculated(false);
    }
  }

  function handleRouteSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const userInput = Object.fromEntries(formData);

    const dbData = createDbData(userInput, directionsData);
    postData(dbData);
    form.reset();

    for (let marker of markers) {
      marker.remove();
    }
    if (map.current.getSource("route")) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }
    setMarkers([]);
    setRouteCoords([]);
    setDirectionsData(null);
    setSavedRoute(false);
    setCalculated(false);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchValue === "") return;
    map.current.flyTo({ center: searchResults[0]?.center, zoom: 12 });

    setSearchValue("");
    setInputPlaceholder(searchResults[0]?.place_name);
  }

  function handleResultClick(resultCoords, placeholderText) {
    map.current.flyTo({ center: resultCoords, zoom: 12 });
    setInputPlaceholder(placeholderText);
    setSearchValue("");
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value);
    getGeocodingData(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?country=de&types=place,address,postcode,poi&language=de&access_token=${accessToken}`
    );
  }
  return (
    <Map
      markers={markers}
      isLoading={isLoading}
      calculated={calculated}
      map={map}
      mapContainer={mapContainer}
      onSave={handleSaveClick}
      onCreate={handleCreateClick}
      onDelete={handleDeleteClick}
      searchValue={searchValue}
      searchResults={searchResults}
      inputPlaceholder={inputPlaceholder}
      onInputChange={handleInputChange}
      onClickResult={handleResultClick}
      onSearchSubmit={handleSearchSubmit}
      savedRoute={savedRoute}
      onCancelClick={handleCancelClick}
      onRouteSubmit={handleRouteSubmit}
    />
  );
}
