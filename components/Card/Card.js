import putData from "@/lib/putData.js";
import StarIcon from "../StarIcon/StarIcon.js";

import {
  List,
  Item,
  Headline,
  RouteLink,
  RouteImage,
  HeadlineContainer,
} from "./StyledCard.js";
import DetailsDisplay from "../DetailsDisplay/DetailsDisplay.js";

export default function Card({ routes, refetch }) {
  async function handleFavoriteClick(routeData) {
    await putData({ ...routeData, favorite: !routeData.favorite });
    refetch();
  }

  const routeItems = routes.map((route) => {
    return (
      <Item backgroundImage={routes.image} key={route._id}>
        {route.favorite ? (
          <StarIcon
            route={route}
            isFilled
            onFavoriteClick={handleFavoriteClick}
          />
        ) : (
          <StarIcon route={route} onFavoriteClick={handleFavoriteClick} />
        )}
        <RouteLink href={`/routes/${route._id}`}>
          <HeadlineContainer>
            <Headline>{route.name}</Headline>
          </HeadlineContainer>
          <RouteImage
            src={route.image}
            width={300}
            height={150}
            priority={true}
            alt={route.name}
          />
          <DetailsDisplay distance={route.distance} duration={route.duration} />
        </RouteLink>
      </Item>
    );
  });
  return <List>{routeItems}</List>;
}
