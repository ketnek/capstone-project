import { PageHeader, Headline } from "./StyledHeader";

export default function Header({ activePage }) {
  return (
    <PageHeader>
      <Headline>{activePage}</Headline>
    </PageHeader>
  );
}
