import Header from "../Header/Header";
import { useRouter } from "next/router";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  const router = useRouter();
  const activePage = router.pathname;

  return (
    <>
      <Header activePage={activePage} />
      <main>{children}</main>
      <Navigation activePage={activePage} />
    </>
  );
}
