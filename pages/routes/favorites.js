import Card from "@/components/Card/Card";
import Placeholder from "@/components/Placeholder/Placeholder";

export default function Routes({ routes, error, isLoading, refetch }) {
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const favoriteRoutes = routes.filter((route) => route.favorite);

  if (favoriteRoutes.length === 0)
    return <Placeholder text="Which is your favorite route?" />;

  return <Card routes={favoriteRoutes} refetch={refetch} />;
}
