import useSWR from "swr";
import { useEffect } from "react";
import patchData from "@/lib/patchData";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import deleteData from "@/lib/deleteData";
import Details from "@/components/Details/Details";

export default function Routes({ accessToken, mapStyle }) {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: route,
    error,
    isLoading,
    mutate: refetchRoute,
  } = useSWR(`/api/routes/${id}`);
  const [edit, setEdit] = useState(false);
  const { mutate: refetchRoutes } = useSWR("/api/routes");

  const editTextareaRef = useRef(null);

  // Set focus to the end of the edit textarea
  useEffect(() => {
    if (edit) {
      editTextareaRef.current.focus();
      editTextareaRef.current.setSelectionRange(
        editTextareaRef.current.value.length,
        editTextareaRef.current.value.length
      );
    }
  }, [edit]);

  function handleBackClick() {
    router.back();
  }
  function handleEditClick() {
    setEdit(!edit);
  }

  async function handleDeleteClick() {
    await deleteData(id);
    refetchRoutes();
    setEdit(false);
    router.back();
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  async function handleEditFormSubmit(event) {
    event.preventDefault();
    const updatedNotes = event.target.elements.notes.value;
    await patchData({ ...route, notes: updatedNotes }, id);
    refetchRoute();
    setEdit(false);
  }

  const routeCoords = route.routeData;

  return (
    <Details
      edit={edit}
      route={route}
      mapStyle={mapStyle}
      routeCoords={routeCoords}
      accessToken={accessToken}
      onBackClick={handleBackClick}
      onEditClick={handleEditClick}
      onDeleteClick={handleDeleteClick}
      editTextareaRef={editTextareaRef}
      onEditFormSubmit={handleEditFormSubmit}
    />
  );
}
