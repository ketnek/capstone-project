import Button from "./StyledSaveDeleteButton";

export default function SaveDeleteButton({ name, formId, onClickHandler }) {
  return (
    <Button name={name} form={formId} onClick={onClickHandler}>
      {name}
    </Button>
  );
}
