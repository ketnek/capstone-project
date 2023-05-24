import patchData from "@/lib/patchData.js";
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

export default function Card({ routes, refetchRoutes }) {
  async function handleFavoriteClick(routeData, id) {
    await patchData({ ...routeData, favorite: !routeData.favorite }, id);
    refetchRoutes();
  }

  const routeItems = routes.map((route) => {
    return (
      <Item backgroundImage={routes.image} key={route._id}>
        {route.favorite ? (
          <StarIcon
            id={route._id}
            route={route}
            isFilled
            onFavoriteClick={handleFavoriteClick}
          />
        ) : (
          <StarIcon
            id={route._id}
            route={route}
            onFavoriteClick={handleFavoriteClick}
          />
        )}
        <RouteLink href={`/routes/${route._id}`}>
          <HeadlineContainer>
            <Headline>{route.name}</Headline>
          </HeadlineContainer>
          <RouteImage
            src={route.image}
            width={250}
            height={100}
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
