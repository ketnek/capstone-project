import { useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export function useMapMarkers(map) {
  const [markers, setMarkers] = useState([]);
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    map.current.on("click", function (event) {
      const markerCoords = [event.lngLat.lng, event.lngLat.lat];
      setRouteCoords((prevCoords) => [...prevCoords, markerCoords]);
      const marker = new mapboxgl.Marker()
        .setLngLat(markerCoords)
        .addTo(map.current);

      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    });
  }, []);

  return { markers, routeCoords, setMarkers, setRouteCoords };
}
