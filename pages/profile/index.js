import useSWR from "swr";
import { useState } from "react";
import User from "@/components/User/User";
import {
  EditButton,
  CancelIcon,
  EditIcon,
} from "@/components/Details/StyledDetails";
import ProfileForm from "@/components/ProfileForm/ProfileForm";

export default function Routes() {
  const [edit, setEdit] = useState(false);
  const {
    data: profiles,
    isLoading,
    error,
    mutate: refetchProfiles,
  } = useSWR("/api/users");

  function handleEditClick() {
    setEdit(!edit);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <EditButton type="button" onClick={handleEditClick}>
        {edit ? <CancelIcon /> : <EditIcon />}
      </EditButton>
      {edit ? (
        <ProfileForm profiles={profiles} />
      ) : (
        <User profiles={profiles} refetchProfiles={refetchProfiles} />
      )}
    </>
  );
}
