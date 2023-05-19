import { useRouter } from "next/router";
import Details from "@/components/Details/Details";
import { useState } from "react";

export default function Routes({ routes, error, isLoading, accessToken }) {
  const [edit, setEdit] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  function handleBackClick() {
    router.back();
  }
  function handleEditClick() {
    setEdit(!edit);
  }
  console.log(edit);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const route = routes.filter((route) => route._id === id)[0];
  const routeCoords = route.routeData;

  return (
    <Details
      edit={edit}
      route={route}
      routeCoords={routeCoords}
      accessToken={accessToken}
      onBackClick={handleBackClick}
      onEditClick={handleEditClick}
    />
  );
}
