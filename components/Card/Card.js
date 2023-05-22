import putData from "@/lib/putData.js";
import StarIcon from "../StarIcon/StarIcon.js";
import formatDuration from "@/lib/formatDuration";
import formatDistance from "@/lib/formatDistance";
import {
  Info,
  List,
  Item,
  Details,
  Headline,
  RouteLink,
  RouteImage,
  HeadlineContainer,
} from "./StyledCard.js";

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
        <RouteLink href="#">
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
          <Details>
            <Info>{`${formatDistance(route.distance)} km`}</Info>
            <Info>{formatDuration(route.duration)}</Info>
          </Details>
        </RouteLink>
      </Item>
    );
  });
  return <List>{routeItems}</List>;
}
