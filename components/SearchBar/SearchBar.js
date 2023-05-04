import SearchBarContainer from "./StyledSearchBar";
import SearchPlaces from "../SearchPlaces/SearchPlaces";
import ResultDisplay from "../ResultDisplay/ResultDisplay";

export default function SearchBar({
  searchValue,
  onInputChange,
  searchResults,
  onClickResult,
  onSearchSubmit,
  inputPlaceholder,
}) {
  return (
    <SearchBarContainer>
      <SearchPlaces
        searchValue={searchValue}
        onInputChange={onInputChange}
        onSearchSubmit={onSearchSubmit}
        inputPlaceholder={inputPlaceholder}
      />

      <ResultDisplay
        searchValue={searchValue}
        searchResults={searchResults}
        onClickResult={onClickResult}
      />
    </SearchBarContainer>
  );
}
