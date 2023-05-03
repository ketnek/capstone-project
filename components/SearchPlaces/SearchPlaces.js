import {
  SearchForm,
  SearchInput,
  SearchButton,
  MagnifyingGlass,
} from "./StyledSearchPlaces";

export default function SearchPlaces({
  searchValue,
  onInputChange,
  onSearchSubmit,
  inputPlaceholder,
}) {
  return (
    <SearchForm onSubmit={(event) => onSearchSubmit(event)}>
      <SearchButton aria-label="search-button" type="submit">
        <MagnifyingGlass />
      </SearchButton>
      <SearchInput
        type="text"
        name="search"
        value={searchValue}
        aria-label="search-input"
        placeholder={inputPlaceholder}
        onChange={(event) => onInputChange(event)}
      />
    </SearchForm>
  );
}
