import formatDuration from "@/lib/formatDuration";
import formatDistance from "@/lib/formatDistance";
import { Details, Info } from "./StyledDetailsDisplay";

export default function DetailsDisplay({ distance, duration }) {
  return (
    <Details>
      <Info>{formatDuration(duration)}</Info>
      <Info>{formatDistance(distance)} km</Info>
    </Details>
  );
}
