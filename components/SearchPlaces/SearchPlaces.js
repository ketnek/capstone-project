import {
  SearchInput,
  SearchButton,
  SearchForm,
  MagnifyingGlass,
} from "./StyledSearchPlaces";

export default function SearchPlaces({ onSearchSubmit }) {
  return (
    <SearchForm onSubmit={(event) => onSearchSubmit(event)}>
      <SearchButton aria-label="search-button" type="submit">
        <MagnifyingGlass />
      </SearchButton>
      <SearchInput type="text" placeholder="Search for places" name="search" />
    </SearchForm>
  );
}
