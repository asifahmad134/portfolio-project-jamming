import { useCallback } from "react";
import TrackList from "./TrackList";

function Playlist(props) {
  // Implement Playlist Renaming
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange],
  );
  return (
    <>
      <div className="rounded-4xl h-dvh border-2 p-4">
        <input
          onChange={handleNameChange}
          value={props.name}
          defaultValue={"example"}
          className="rounded-4xl sticky top-0 my-8 w-full border-2 p-4 text-center font-bold"
        />
        <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />
        <div className="flex items-center justify-center">
          <button
            className="rounded-4xl m-4 bg-green-900 p-4 text-center text-white"
            onClick={props.onSave}
          >
            Save to Sptify
          </button>
        </div>
      </div>
    </>
  );
}

export default Playlist;
