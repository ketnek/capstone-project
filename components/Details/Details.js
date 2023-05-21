import RoutePreview from "@/components/RoutePreview/RoutePreview";
import DetailsDisplay from "@/components/DetailsDisplay/DetailsDisplay";
import {
  Headline,
  BackIcon,
  EditIcon,
  BackButton,
  EditButton,
  CancelIcon,
  NotesContainer,
  HeadlineContainer,
  Notes,
} from "./StyledDetails";
import EditForm from "../EditForm/EditForm";
import SaveDeleteButton from "../SaveDeleteButton/SaveDeleteButton";

export default function Details({
  edit,
  route,
  routeCoords,
  accessToken,
  onBackClick,
  onEditClick,
  editTextareaRef,
  onEditFormSubmit,
}) {
  return (
    <>
      <BackButton type="button" onClick={onBackClick}>
        <BackIcon />
      </BackButton>
      <EditButton type="button" onClick={onEditClick}>
        {edit ? <CancelIcon /> : <EditIcon />}
      </EditButton>
      <HeadlineContainer>
        <Headline>{route.name}</Headline>
        {edit && <SaveDeleteButton name="Delete" />}
      </HeadlineContainer>
      <RoutePreview routeCoords={routeCoords} accessToken={accessToken} />
      <DetailsDisplay duration={route.duration} distance={route.distance} />
      <HeadlineContainer>
        <Headline>Notes:</Headline>
        {edit && <SaveDeleteButton formId="editForm" name="Save" />}
      </HeadlineContainer>
      {edit ? (
        <EditForm
          route={route}
          onEditFormSubmit={onEditFormSubmit}
          editTextareaRef={editTextareaRef}
        />
      ) : (
        <NotesContainer>
          <Notes>{route.notes}</Notes>
        </NotesContainer>
      )}
    </>
  );
}
