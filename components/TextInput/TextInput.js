import { Label } from "./StyeldTextInput";

export default function TextInput({ id, name, value, onChangeInput }) {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={(event) => onChangeInput(event)}
      />
    </>
  );
}
