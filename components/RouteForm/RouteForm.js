import { Form, Fieldset } from "./StyledRouteForm";
import Image from "next/image";

export default function RouteForm({
  image,
  onChange,
  savedRoute,
  onRouteSubmit,
  onCancelClick,
}) {
  return (
    <Form
      savedRoute={savedRoute}
      onSubmit={onRouteSubmit}
      aria-label="Route information Form"
    >
      <Fieldset aria-labelledby="description">
        <legend>Route Informations</legend>
        <p id="description">
          Please provide a name for your route and add some notes if you like
          too.
        </p>
        <label htmlFor="name" required>
          Route Name
        </label>
        <input required type="text" id="name" name="name" />
        <label htmlFor="notes">Notes</label>
        <textarea
          required
          id="notes"
          name="notes"
          placeholder="Please enter your notes here..."
        ></textarea>
        {image && (
          <Image
            src={URL.createObjectURL(image)}
            width={150}
            height={150}
            alt="Preview of the image to upload"
            style={{ objectFit: "cover" }}
          />
        )}
        <label htmlFor="Image">Upload your image</label>
        <input onChange={onChange} type="file" id="image" name="image" />
      </Fieldset>
      <button type="submit">Save</button>
      <button onClick={onCancelClick} type="button">
        Cancel
      </button>
    </Form>
  );
}
