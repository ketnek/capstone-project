import { Form, Fieldset } from "./StyledRouteForm";

export default function RouteForm({
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
      </Fieldset>
      <button type="submit">Save</button>
      <button onClick={onCancelClick} type="button">
        Cancel
      </button>
    </Form>
  );
}
