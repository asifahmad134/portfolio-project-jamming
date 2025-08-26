import TrackList from "./TrackList";

function SearchResults(props) {
  return (
    <>
      <div className="rounded-4xl h-dvh border-2 p-4">
        <h1 className="rounded-4xl sticky top-0 my-8 border-2 p-4 text-center font-bold">
          Search Results
        </h1>
        <div className="flex-col">
          <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
      </div>
    </>
  );
}

export default SearchResults;
