export default function formatDistance(routeDistance) {
  const distance = Math.round((routeDistance / 1000) * 10) / 10;

  const commaSeparatedDistance = distance.toString().replace(".", ",");

  return commaSeparatedDistance;
}
