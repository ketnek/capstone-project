import { useState } from "react";
import { Form, Textarea } from "./StyledEditForm";

export default function EditForm({ route, onEditFormSubmit, editTextareaRef }) {
  const [textareaInput, setTextareaInput] = useState(route.notes);

  function handleChangeTextarea(event) {
    setTextareaInput(event.target.value);
  }

  return (
    <Form onSubmit={onEditFormSubmit} id="editForm">
      <Textarea
        name="notes"
        value={textareaInput}
        ref={editTextareaRef}
        aria-label="Edit your notes"
        onChange={handleChangeTextarea}
      />
    </Form>
  );
}
