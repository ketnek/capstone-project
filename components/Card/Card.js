import formatDuration from "@/lib/formatDuration";
import formatDistance from "@/lib/formatDistance";
import putData from "@/lib/putData.js";
import {
  Info,
  List,
  Item,
  Details,
  Headline,
  StarIcon,
  RouteLink,
  RouteImage,
  FilledStarIcon,
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
        <RouteLink href="#">
          <HeadlineContainer>
            <Headline>{route.name}</Headline>
            {route.favorite ? (
              <FilledStarIcon onClick={() => handleFavoriteClick(route)} />
            ) : (
              <StarIcon onClick={() => handleFavoriteClick(route)} />
            )}
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
