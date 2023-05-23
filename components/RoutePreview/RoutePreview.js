import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect } from "react";
import Container from "./StyledRoutePreview";
import drawRouteOnMap from "@/lib/drawRouteOnMap";
import { useMapboxMap } from "@/hooks/useMapboxMap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function RoutePreview({ routeCoords, accessToken, mapStyle }) {
  const [map, mapContainer] = useMapboxMap(mapStyle);

  mapboxgl.accessToken = accessToken;

  useEffect(() => {
    setTimeout(() => drawRouteOnMap(routeCoords, map), 300);
  }, []);

  return <Container ref={mapContainer} className="map-container" />;
}
