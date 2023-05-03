import { Item, List, PlaceholderItem } from "./StyledResultDisplay";

export default function ResultDisplay({
  searchValue,
  searchResults,
  onClickResult,
}) {
  const resultItems = searchResults.map((result) => {
    return (
      <Item
        key={result.id}
        onClick={() => onClickResult(result.center, result.place_name)}
      >
        {result.place_name}
      </Item>
    );
  });

  return searchValue === "" ? null : (
    <List>
      {searchResults.length === 0 ? (
        <PlaceholderItem>No results...</PlaceholderItem>
      ) : (
        resultItems
      )}
    </List>
  );
}
