import { useRouter } from "next/router";
import Details from "@/components/Details/Details";

export default function Routes({ routes, error, isLoading, accessToken }) {
  const router = useRouter();
  const { id } = router.query;

  function handleBackClick() {
    router.back();
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const route = routes.find((route) => route._id === id);
  const routeCoords = route.routeData;

  return (
    <Details
      route={route}
      routeCoords={routeCoords}
      accessToken={accessToken}
      onBackClick={handleBackClick}
    />
  );
}
