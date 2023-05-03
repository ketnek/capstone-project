import StyledMap from "./StyledMap";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function Map({ accessToken, lng, lat, zoom, center }) {
  const map = useRef(null);
  const mapContainer = useRef(null);

  mapboxgl.accessToken = accessToken;

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (center) {
      map.current.flyTo({ center: center, zoom: 14 });
    }
  }, [center]);

  return <StyledMap ref={mapContainer} />;
}
