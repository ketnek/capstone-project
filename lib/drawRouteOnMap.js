import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function drawRouteOnMap(coords, map) {
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

  const bounds = new mapboxgl.LngLatBounds();
  coords.coordinates.forEach(function (coord) {
    bounds.extend(coord);
  });
  map.current.fitBounds(bounds, { padding: 40 });
}
