import useSWR from "swr";
import Card from "@/components/Card/Card";
import Placeholder from "@/components/Placeholder/Placeholder";

export default function Routes() {
  const {
    data: routes,
    error,
    isLoading,
    mutate: refetchRoutes,
  } = useSWR("/api/routes");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const favoriteRoutes = routes.filter((route) => route.favorite);

  if (favoriteRoutes.length === 0)
    return <Placeholder text="Which is your favorite route?" />;

  return <Card routes={favoriteRoutes} refetchRoutes={refetchRoutes} />;
}
