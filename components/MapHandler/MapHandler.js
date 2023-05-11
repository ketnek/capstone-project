import Map from "../Map/Map";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import postData from "@/lib/postData";
import createDbData from "@/lib/createDbData";
import coordsToString from "@/lib/coordsToString";
import { useDirectionsApi } from "@/hooks/useDirectionsApi";
import { useGeocodingApi } from "@/hooks/useGeocodingApi";

export default function MapHandler() {
  const map = useRef(null);

  const [markers, setMarkers] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [routeCoords, setRouteCoords] = useState([]);
  const [calculated, setCalculated] = useState(false);

  const [inputPlaceholder, setInputPlaceholder] = useState("Search for places");
  const [savedRoute, setSavedRoute] = useState(false);
  //-------------------
  const { isLoading, directionsData, setDirectionsData, getDirectionsData } =
    useDirectionsApi();

  const { searchResults, getGeocodingData } = useGeocodingApi();

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
  return <Map map={map} />;
}
