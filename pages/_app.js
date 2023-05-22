import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";

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
          routes={routes}
          error={error}
          isLoading={isLoading}
          refetch={refetch}
        />
      </Layout>
    </>
  );
}
