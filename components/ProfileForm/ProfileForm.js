import { Fieldset, FilePreview, Form, Legend } from "./StyledProfileForm";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import FileInput from "../FileInput/FileInput";

export default function ProfileForm({
  image,
  profile,
  onChangeFile,
  sendingForm,
  onProfileFormSubmit,
}) {
  const [inputValue, setInputValue] = useState(profile);
  const { profileImg, bikeName, bikeType, bought, mileage, lastService } =
    inputValue;

  function handleChangeInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <Form onSubmit={onProfileFormSubmit}>
      <Fieldset>
        <Legend>Update your Profile</Legend>
        <FilePreview
          src={image ? URL.createObjectURL(image) : profileImg}
          alt="profile picture"
          height={100}
          width={100}
        />

        <FileInput
          labelText="Upload profile image"
          onChangeInput={onChangeFile}
        />

        <TextInput
          id="bikeName"
          name="Bike Name:"
          value={bikeName}
          onChangeInput={handleChangeInput}
        />
        <TextInput
          id="bikeType"
          name="Type:"
          value={bikeType}
          onChangeInput={handleChangeInput}
        />
        <TextInput
          id="bought"
          name="Bought:"
          value={bought}
          onChangeInput={handleChangeInput}
        />
        <TextInput
          id="mileage"
          name="Mileage:"
          value={mileage}
          onChangeInput={handleChangeInput}
        />
        <TextInput
          id="lastService"
          name="Last Service:"
          value={lastService}
          onChangeInput={handleChangeInput}
        />
      </Fieldset>
      <button disabled={sendingForm} type="submit">
        {sendingForm ? "..." : "Save"}
      </button>
    </Form>
  );
}
