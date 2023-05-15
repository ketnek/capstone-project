export default function createDbData(userInput, apiData) {
  const dbData = {
    name: userInput.name,
    distance: apiData.routes[0].distance,
    duration: apiData.routes[0].duration,
    routeData: apiData.routes[0].geometry,
    notes: userInput.notes,
  };
  return dbData;
}
