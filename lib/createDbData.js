export default function createDbData(userInput, apiData, imageUrl) {
  const dbData = {
    name: userInput.name,
    distance: apiData.routes[0].distance,
    duration: apiData.routes[0].duration,
    routeData: apiData.routes[0].geometry,
    notes: userInput.notes,
    image: imageUrl,
    favorite: false,
  };
  return dbData;
}
