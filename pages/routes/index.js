import Card from "@/components/Card/Card";
import Placeholder from "@/components/Placeholder/Placeholder";

export default function Routes({ routes, error, isLoading, refetch }) {
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (routes.length === 0)
    return <Placeholder text="Add your first route today!" />;

  return <Card routes={routes} refetch={refetch} />;
}
