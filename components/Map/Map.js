import "mapbox-gl/dist/mapbox-gl.css";
import Control from "../Control/Control";
import SearchBar from "../SearchBar/SearchBar";
import RouteForm from "../RouteForm/RouteForm";
import { StyledMap, Loading } from "./StyledMap";

export default function Map({
  onSave,
  markers,
  onDelete,
  onCreate,
  isLoading,
  calculated,
  savedRoute,
  searchValue,
  mapContainer,
  searchResults,
  onInputChange,
  onCancelClick,
  onClickResult,
  onRouteSubmit,
  onSearchSubmit,
  inputPlaceholder,
}) {
  return (
    <>
      {isLoading && <Loading>Loading...</Loading>}
      <StyledMap ref={mapContainer} />
      {markers.length !== 0 && (
        <Control
          onSave={onSave}
          markers={markers}
          onCreate={onCreate}
          onDelete={onDelete}
          isLoading={isLoading}
          calculated={calculated}
        />
      )}
      {markers.length === 0 && (
        <SearchBar
          searchValue={searchValue}
          searchResults={searchResults}
          onInputChange={onInputChange}
          onClickResult={onClickResult}
          onSearchSubmit={onSearchSubmit}
          inputPlaceholder={inputPlaceholder}
        />
      )}

      <RouteForm
        savedRoute={savedRoute}
        onCancelClick={onCancelClick}
        onRouteSubmit={onRouteSubmit}
      />
    </>
  );
}
