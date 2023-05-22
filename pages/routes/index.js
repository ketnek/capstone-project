import useSWR from "swr";
import Card from "@/components/Card/Card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Routes() {
  const { data: routes, error, isLoading } = useSWR("/api/routes", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Card routes={routes} />;
}
