import "mapbox-gl/dist/mapbox-gl.css";
import Container from "./StyledRoutePreview";
import React, { useRef, useEffect } from "react";
import drawRouteOnMap from "@/lib/drawRouteOnMap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function RoutePreview({ routeCoords, accessToken }) {
  const map = useRef(null);
  const mapContainer = useRef(null);

  mapboxgl.accessToken = accessToken;

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [10.000654, 53.550341],
      attributionControl: false,
      zoom: 9,
    });

    setTimeout(() => drawRouteOnMap(routeCoords, map), 300);
  }, []);

  return <Container ref={mapContainer} className="map-container" />;
}
