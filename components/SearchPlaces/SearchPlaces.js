import {
  SearchInput,
  SearchButton,
  SearchForm,
  MagnifyingGlass,
} from "./StyledSearchPlaces";

export default function SearchPlaces({ handleSearchSubmit }) {
  return (
    <SearchForm onSubmit={(event) => handleSearchSubmit(event)}>
      <SearchButton type="submit">
        <MagnifyingGlass height="80%" width="80%" />
      </SearchButton>
      <SearchInput type="text" placeholder="Search for places" />
    </SearchForm>
  );
}
