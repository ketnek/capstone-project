import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";

// Change Token before git push!!!
const accessToken =
  "pk.eyJ1Ijoia2V0bmVrIiwiYSI6ImNsaHp2NXNyMTA5cXAzbnVuYm11MWFkcjgifQ.Heb3QWzmvHldeT0CFMITNA";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher: fetcher }}>
        <Layout>
          <Component {...pageProps} accessToken={accessToken} />
        </Layout>
      </SWRConfig>
    </>
  );
}
