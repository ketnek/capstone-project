import { Input, Label } from "./StyeldTextInput";

export default function TextInput({ id, name, value, onChangeInput }) {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <Input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChangeInput}
      />
    </>
  );
}
