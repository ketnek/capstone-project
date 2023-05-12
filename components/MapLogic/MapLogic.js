import Map from "../Map/Map";
import postData from "@/lib/postData";
import { useState, useEffect } from "react";
import createDbData from "@/lib/createDbData";
import drawRouteOnMap from "@/lib/drawRouteOnMap";
import coordsToString from "@/lib/coordsToString";
import { useMapboxMap } from "@/hooks/useMapboxMap";
import { useMapMarkers } from "@/hooks/useMapMarkers";
import { useGeocodingApi } from "@/hooks/useGeocodingApi";
import { useDirectionsApi } from "@/hooks/useDirectionsApi";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// Change Token before git push!!!
const accessToken =
  "ppk.eyJ1Ijoia2V0bmVrIiwiYSI6ImNsaGs0eW9uNDA5bmEzcG11bmFlN29zaW0ifQ.REO7S2Yk_5pYP0cjzp3tlw";

export default function MapLogic() {
  const [map, mapContainer] = useMapboxMap();
  const [searchValue, setSearchValue] = useState("");
  const [calculated, setCalculated] = useState(false);
  const [savedRoute, setSavedRoute] = useState(false);
  const { searchResults, getGeocodingData } = useGeocodingApi();
  const [inputPlaceholder, setInputPlaceholder] = useState("Search for places");
  const { isLoading, directionsData, setDirectionsData, getDirectionsData } =
    useDirectionsApi();
  const { markers, routeCoords, setMarkers, setRouteCoords } =
    useMapMarkers(map);

  mapboxgl.accessToken = accessToken;

  useEffect(() => {
    // Only draw when directions data available
    if (!isLoading && directionsData !== null) {
      // Get the coordinates from the response
      const coords = directionsData.routes[0].geometry;
      // Draw the route on the map
      drawRouteOnMap(coords, map);
    }
  }, [isLoading, directionsData, map]);

  // all handler

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

  function handleResultClick(resultCoords, placeholderText) {
    map.current.flyTo({ center: resultCoords, zoom: 12 });
    setInputPlaceholder(placeholderText);
    setSearchValue("");
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchValue === "") return;
    map.current.flyTo({ center: searchResults[0]?.center, zoom: 12 });

    setSearchValue("");
    setInputPlaceholder(searchResults[0]?.place_name);
  }

  function handleCreateClick() {
    const coordsString = coordsToString(routeCoords);
    getDirectionsData(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${coordsString}?geometries=geojson&language=de&overview=full&steps=true&access_token=${mapboxgl.accessToken}`
    );
    setCalculated(true);
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
      savedRoute={savedRoute}
      searchValue={searchValue}
      mapContainer={mapContainer}
      searchResults={searchResults}
      inputPlaceholder={inputPlaceholder}
      onSave={handleSaveClick}
      onCreate={handleCreateClick}
      onDelete={handleDeleteClick}
      onInputChange={handleInputChange}
      onClickResult={handleResultClick}
      onCancelClick={handleCancelClick}
      onRouteSubmit={handleRouteSubmit}
      onSearchSubmit={handleSearchSubmit}
    />
  );
}
