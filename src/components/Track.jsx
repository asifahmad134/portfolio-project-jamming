import React, { useCallback } from "react";
import { DiamondPlus, DiamondMinus } from "lucide-react";

function Track(props) {
  // Implement Adding Songs To a Custom Playlist
  const addTrack = useCallback(() => {
    props.onAdd(props.track);
  }, [props.onAdd, props.track]);

  // Implement Removing Songs From a Custom Playlist
  const removeTrack = useCallback(() => {
    props.onRemove(props.track);
  }, [props.onRemove, props.track]);

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="size-16" onClick={removeTrack}>
          <DiamondMinus />
        </button>
      );
    }
    return (
      <button className="size-16" onClick={addTrack}>
        <DiamondPlus />
      </button>
    );
  };

  return (
    <>
      <div className="rounded-4xl flex justify-between border border-dotted p-4 shadow-2xl">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-bold uppercase">{props.track.name}</h3>
          <h3>
            <i>by...</i>
            {props.track.artist}
          </h3>
          <h3>
            <i>in...</i>
            {props.track.album}
          </h3>
        </div>
        <div className="ml-4">{renderAction()}</div>
      </div>
    </>
  );
}

export default Track;
