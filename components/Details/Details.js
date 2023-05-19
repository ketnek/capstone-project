import RoutePreview from "@/components/RoutePreview/RoutePreview";
import DetailsDisplay from "@/components/DetailsDisplay/DetailsDisplay";
import {
  Headline,
  BackIcon,
  BackButton,
  NotesContainer,
} from "./StyledDetails";

export default function Details({
  route,
  routeCoords,
  accessToken,
  onBackClick,
}) {
  return (
    <>
      <Headline>{route.name}</Headline>
      <BackButton type="button" onClick={onBackClick}>
        <BackIcon />
      </BackButton>
      <RoutePreview routeCoords={routeCoords} accessToken={accessToken} />
      <DetailsDisplay duration={route.duration} distance={route.distance} />
      <Headline>Notes:</Headline>
      <NotesContainer>
        <p>- {route.notes}</p>
      </NotesContainer>
    </>
  );
}
