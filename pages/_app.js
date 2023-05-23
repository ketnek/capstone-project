import { SWRConfig } from "swr";
import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";

// Change Token before git push!!!
const accessToken = "";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/outdoors-v12"
  );

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher: fetcher }}>
        <Layout>
          <Component
            {...pageProps}
            accessToken={accessToken}
            mapStyle={mapStyle}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}

//mapbox://styles/mapbox/outdoors-v12
//mapbox://styles/mapbox/dark-v11
//mapbox://styles/mapbox/satellite-streets-v12
