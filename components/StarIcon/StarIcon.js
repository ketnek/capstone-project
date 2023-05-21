import { FaRegStar, FaStar } from "react-icons/fa";
import Button from "./StyledStarIcon";

export default function StarIcon({ id, isFilled, route, onFavoriteClick }) {
  return (
    <Button onClick={() => onFavoriteClick(route, id)}>
      {isFilled ? <FaStar /> : <FaRegStar />}
    </Button>
  );
}
