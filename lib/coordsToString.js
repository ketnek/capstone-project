// Format the data for the Map Directions query
export default function coordsToString(coords) {
  // Format the coordinates
  const coordsString = coords.join(";");
  return coordsString;
}
