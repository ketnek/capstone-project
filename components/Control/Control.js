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
          handler={onCreate}
          isLoading={isLoading}
          calculated={calculated}
        />
      )}
      {calculated && !isLoading && (
        <ControlButton handler={onSave} job="save" />
      )}

      <ControlButton
        isLoading={isLoading}
        calculated={calculated}
        handler={onDelete}
        job="delete"
      />
    </Container>
  );
}
