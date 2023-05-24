import useSWR from "swr";
import { useState } from "react";
import createProfileDbData from "@/lib/createProfileDbData";
import User from "@/components/User/User";
import postImage from "@/lib/postImage";
import patchProfileData from "@/lib/patchProfileData";
import {
  EditButton,
  CancelIcon,
  EditIcon,
} from "@/components/Details/StyledDetails";
import ProfileForm from "@/components/ProfileForm/ProfileForm";

export default function Profile() {
  const {
    data: profiles,
    isLoading,
    error,
    mutate: refetchProfiles,
  } = useSWR("/api/users");
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [sendingForm, setSendingForm] = useState(false);

  function handleEditClick() {
    setEdit(!edit);
  }

  function handleChangeFile(event) {
    setImage(event.target.files[0]);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const profile = profiles[0];

  async function handleProfileFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    setSendingForm(true);
    const formData = new FormData(form);
    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const imageUrl = await postImage(formData);
    const userInput = Object.fromEntries(formData);
    const dbData = createProfileDbData(userInput, imageUrl);

    await patchProfileData(dbData, profile._id);
    form.reset();
    setImage(null);
    setEdit(false);
    setSendingForm(false);
    refetchProfiles();
  }

  return (
    <>
      <EditButton type="button" onClick={handleEditClick}>
        {edit ? <CancelIcon /> : <EditIcon />}
      </EditButton>
      {edit ? (
        <ProfileForm
          profile={profile}
          image={image}
          sendingForm={sendingForm}
          onChangeFile={handleChangeFile}
          onProfileFormSubmit={handleProfileFormSubmit}
        />
      ) : (
        <User profile={profile} />
      )}
    </>
  );
}
