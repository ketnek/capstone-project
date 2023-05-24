import { Fieldset, FilePreview, Form, Legend } from "./StyledProfileForm";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import FileInput from "../FileInput/FileInput";

export default function ProfileForm({ profiles, image }) {
  const [profile, setProfile] = useState(profiles[0]);
  const { profileImg, bikeName, type, bought, mileage, lastService } = profile;

  function handleChangeFile(event) {
    // setImage(event.target.files[0]);
    console.log("File changed");
  }
  function handleChangeInput(event) {
    console.log("Hallo");
  }

  return (
    <Form>
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
          onChangeInput={handleChangeFile}
        />

        <TextInput
          id="bike-name"
          name="Bike Name:"
          value={bikeName}
          onChangeInput={handleChangeInput}
        />
        <TextInput
          id="type"
          name="Type:"
          value={type}
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
          id="last-service"
          name="Last Service:"
          value={lastService}
          onChangeInput={handleChangeInput}
        />
      </Fieldset>
    </Form>
  );
}
