import Card from "@/components/Card/Card";
import Placeholder from "@/components/Placeholder/Placeholder";
import { useEffect } from "react";

export default function Routes({ routes, error, isLoading, refetch }) {
  useEffect(() => {
    refetch();
  }, [routes, refetch]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (routes.length === 0)
    return <Placeholder text="Add your first route today!" />;

  return <Card routes={routes} refetch={refetch} />;
}
