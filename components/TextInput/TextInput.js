export default function TextInput({ id, name, value, onChangeInput }) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
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
