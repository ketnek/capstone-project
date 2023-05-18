import useSWR from "swr";
import Card from "@/components/Card/Card";
import Placeholder from "@/components/Placeholder/Placeholder";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Routes() {
  const {
    data: routes,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR("/api/routes", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (routes.length === 0)
    return <Placeholder text="Add your first route today!" />;

  return <Card routes={routes} refetch={refetch} />;
}
