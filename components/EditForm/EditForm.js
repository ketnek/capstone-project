import { useState } from "react";
import { Form, Textarea } from "./StyledEditForm";

export default function EditForm({ route, onEditFormSubmit, editTextareaRef }) {
  const [textareaInput, setTextareaInput] = useState(route.notes);

  function handleChangeTextarea(event) {
    setTextareaInput(event.target.value);
  }

  return (
    <Form
      id="editForm"
      onSubmit={onEditFormSubmit}
      aria-label="Edit notes form"
    >
      <Textarea
        name="notes"
        value={textareaInput}
        ref={editTextareaRef}
        aria-label="Edit your notes here"
        onChange={handleChangeTextarea}
      />
    </Form>
  );
}
