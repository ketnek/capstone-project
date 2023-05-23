import {
  Form,
  Label,
  Legend,
  Fieldset,
  FileInput,
  RouteInput,
  FormButton,
  FilePreview,
  Description,
  NotesTextarea,
  ButtonContainer,
} from "./StyledRouteForm";

export default function RouteForm({
  image,
  onChange,
  savedRoute,
  sendRouteForm,
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
        <Legend>Route Informations</Legend>
        <Description id="description">
          Please provide a name for your route and add some notes if you like
          to.
        </Description>
        <Label htmlFor="name" required>
          Route Name
        </Label>
        <RouteInput required type="text" id="name" name="name" />
        <Label htmlFor="notes">Notes</Label>
        <NotesTextarea
          required
          id="notes"
          name="notes"
          placeholder="Please enter your notes here..."
        ></NotesTextarea>
        {image && (
          <FilePreview
            src={URL.createObjectURL(image)}
            width={200}
            height={100}
            alt="Preview of the image to upload"
          />
        )}
        <Label htmlFor="Image">Upload your image</Label>
        <FileInput onChange={onChange} type="file" id="image" name="image" />
      </Fieldset>
      <ButtonContainer>
        <FormButton
          disabled={sendRouteForm}
          onClick={onCancelClick}
          type="button"
        >
          Cancel
        </FormButton>
        <FormButton disabled={sendRouteForm} type="submit">
          {sendRouteForm ? "..." : "Save"}
        </FormButton>
      </ButtonContainer>
    </Form>
  );
}
