import { useState, useRef } from "react";
import putData from "@/lib/putData";
import { useRouter } from "next/router";
import Details from "@/components/Details/Details";
import { useEffect } from "react";

export default function Routes({
  error,
  routes,
  refetch,
  isLoading,
  accessToken,
}) {
  const router = useRouter();
  const { id } = router.query;
  const editTextareaRef = useRef(null);
  const [edit, setEdit] = useState(false);

  function handleBackClick() {
    router.back();
  }
  function handleEditClick() {
    setEdit(!edit);
  }

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

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const route = routes.filter((route) => route._id === id)[0];
  const routeCoords = route.routeData;

  async function handleEditFormSubmit(event) {
    event.preventDefault();
    const updatedNotes = event.target.elements.notes.value;
    await putData({ ...route, notes: updatedNotes });
    refetch();
    setEdit(false);
  }

  return (
    <Details
      edit={edit}
      route={route}
      routeCoords={routeCoords}
      accessToken={accessToken}
      onBackClick={handleBackClick}
      onEditClick={handleEditClick}
      editTextareaRef={editTextareaRef}
      onEditFormSubmit={handleEditFormSubmit}
    />
  );
}
