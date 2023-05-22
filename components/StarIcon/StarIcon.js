import { FaRegStar, FaStar } from "react-icons/fa";
import Button from "./StyledStarIcon";

export default function StarIcon({ isFilled, route, onFavoriteClick }) {
  return (
    <Button onClick={() => onFavoriteClick(route)}>
      {isFilled ? <FaStar /> : <FaRegStar />}
    </Button>
  );
}
