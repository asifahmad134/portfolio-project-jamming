// Implement Track Listing in The Component Tree
import Track from "./Track";

function TrackList(props) {
  return (
    <div className="flex flex-col gap-4">
      {props.tracks?.map((t) => {
        return (
          <Track
            track={t}
            key={t.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
