import Container from "./StyledControl";
import ControlButton from "../ControlButton/ControlButton";

export default function Control({
  onSave,
  markers,
  onCreate,
  onDelete,
  isLoading,
  calculated,
}) {
  return (
    <Container>
      {markers.length > 1 && (
        <ControlButton
          job="create"
          onClick={onCreate}
          isLoading={isLoading}
          calculated={calculated}
        />
      )}
      {calculated && !isLoading && (
        <ControlButton onClick={onSave} job="save" />
      )}

      <ControlButton
        isLoading={isLoading}
        calculated={calculated}
        onClick={onDelete}
        job="delete"
      />
    </Container>
  );
}
