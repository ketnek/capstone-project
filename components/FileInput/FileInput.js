import Label from "./StyledFileInput";

export default function FileInput({ labelText, onChangeInput }) {
  return (
    <>
      <Label htmlFor="Image">{labelText}</Label>
      <input onChange={onChangeInput} type="file" id="image" name="image" />
    </>
  );
}
