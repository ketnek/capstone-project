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
        <MagnifyingGlass />
      </SearchButton>
      <SearchInput type="text" placeholder="Search for places" />
    </SearchForm>
  );
}
