import { Container } from "./StyledControl";
import ControlButton from "../ControlButton/ControlButton";

export default function Control({
  markers,
  onCreate,
  onDelete,
  isLoading,
  calculated,
}) {
  let saveOrCreateButton;
  if (markers.length > 1) {
    if (calculated) {
      saveOrCreateButton = <ControlButton job="save" />;
    } else {
      saveOrCreateButton = (
        <ControlButton
          job="create"
          handler={onCreate}
          isLoading={isLoading}
          calculated={calculated}
        />
      );
    }
  }
  return (
    <Container>
      {saveOrCreateButton}
      <ControlButton handler={onDelete} job="delete" />
    </Container>
  );
}
