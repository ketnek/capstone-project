import { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export function useMapboxMap(mapStyle) {
  const map = useRef(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [10.000654, 53.550341],
      attributionControl: false,
      zoom: 9,
    });
  }, []);

  return [map, mapContainer];
}
