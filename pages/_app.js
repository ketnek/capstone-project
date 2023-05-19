import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";

// Change Token before git push!!!
const accessToken =
  "pk.eyJ1Ijoia2V0bmVrIiwiYSI6ImNsaHE1NjV5dzBkcDMza284dmJqYXYyZGUifQ.fymEqTwh54IuRESJ_rHLMg";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: routes,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR("/api/routes", fetcher);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          error={error}
          routes={routes}
          refetch={refetch}
          isLoading={isLoading}
          accessToken={accessToken}
        />
      </Layout>
    </>
  );
}
