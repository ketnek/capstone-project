import Button from "./StyledSaveDeleteButton";

export default function SaveDeleteButton({ name, formId }) {
  return (
    <Button name={name} form={formId}>
      {name}
    </Button>
  );
}
