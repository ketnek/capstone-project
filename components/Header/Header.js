import { PageHeader, Headline } from "./StyledHeader";

export default function Header({ activePage }) {
  return (
    <PageHeader>
      <Headline>
        {activePage === "/" && "Map"}
        {activePage === "/routes" && "Routes"}
        {activePage === "/routes/favorites" && "Favorites"}
        {activePage === "/profile" && "Profile"}
        {activePage === "/routes/[id]" && "Details"}
      </Headline>
    </PageHeader>
  );
}
