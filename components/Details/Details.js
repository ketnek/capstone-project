import RoutePreview from "@/components/RoutePreview/RoutePreview";
import DetailsDisplay from "@/components/DetailsDisplay/DetailsDisplay";
import {
  Headline,
  BackIcon,
  EditIcon,
  BackButton,
  EditButton,
  NotesContainer,
  CancelIcon,
} from "./StyledDetails";

export default function Details({
  edit,
  route,
  routeCoords,
  accessToken,
  onBackClick,
  onEditClick,
}) {
  return (
    <>
      <BackButton type="button" onClick={onBackClick}>
        <BackIcon />
      </BackButton>
      <EditButton type="button" onClick={onEditClick}>
        {edit ? <CancelIcon /> : <EditIcon />}
      </EditButton>
      <Headline>{route.name}</Headline>
      <RoutePreview routeCoords={routeCoords} accessToken={accessToken} />
      <DetailsDisplay duration={route.duration} distance={route.distance} />
      <Headline>Notes:</Headline>
      {edit ? (
        <div>Editing</div>
      ) : (
        <NotesContainer>
          <p>- {route.notes}</p>
        </NotesContainer>
      )}
    </>
  );
}
