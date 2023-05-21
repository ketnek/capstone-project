import { useState, useRef } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Details from "@/components/Details/Details";
import { useEffect } from "react";
import patchData from "@/lib/patchData";
import deleteData from "@/lib/deleteData";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Routes({ refetchRoutes, accessToken }) {
  const router = useRouter();
  const { id } = router.query;
  const editTextareaRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const {
    data: route,
    error,
    isLoading,
    mutate: refetchRoute,
  } = useSWR(`/api/routes/${id}`, fetcher);

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
