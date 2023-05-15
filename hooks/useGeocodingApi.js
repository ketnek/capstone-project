import { useState } from "react";

export function useGeocodingApi() {
  const [searchResults, setSearchResults] = useState([]);

  async function getGeocodingData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Loading new destination went wrong!");
      }
      const data = await response.json();
      setSearchResults(data.features);
    } catch (error) {
      console.error(error);
    }
  }
  return { searchResults, getGeocodingData };
}
