import { useState } from "react";

export function useDirectionsApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [directionsData, setDirectionsData] = useState(null);

  async function getDirectionsData(url) {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        alert(
          `${data.code} - ${data.message}.\n\nFor more information: https://docs.mapbox.com/api/navigation/map-matching/#map-matching-api-errors`
        );
        return;
      } else {
        const data = await response.json();
        setDirectionsData(data);
      }
    } catch (error) {
      console.error("An Error occurred");
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, directionsData, setDirectionsData, getDirectionsData };
}
