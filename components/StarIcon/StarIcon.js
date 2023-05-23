import Button from "./StyledStarIcon";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function StarIcon({ id, isFilled, route, onFavoriteClick }) {
  return (
    <Button onClick={() => onFavoriteClick(route, id)}>
      {isFilled ? <FaStar /> : <FaRegStar />}
    </Button>
  );
}
