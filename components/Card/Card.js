import formatDuration from "@/lib/formatDuration";
import formatDistance from "@/lib/formatDistance";
import {
  Info,
  List,
  Item,
  Details,
  Headline,
  StarIcon,
  RouteLink,
  RouteImage,
  HeadlineContainer,
} from "./StyledCard.js";

export default function Card({ routes }) {
  const routeItems = routes.map((route) => {
    return (
      <Item backgroundImage={routes.image} key={route._id}>
        <RouteLink href="#">
          <HeadlineContainer>
            <Headline>{route.name}</Headline>
            <StarIcon />
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
