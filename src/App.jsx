import { Drum } from "lucide-react";
import { useState, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from "./Sptify";
// Implement Track Listing in The Component Tree - mock data
const tracksData = [
  {
    name: "Song 001",
    artist: "artist 001",
    album: "album 001",
    id: 1,
  },
  {
    name: "Song 002",
    artist: "artist 002",
    album: "album 002",
    id: 2,
  },
  {
    name: "Song 003",
    artist: "artist 003",
    album: "album 003",
    id: 3,
  },
];

function App() {
  const [searchResults, setSearchResults] = useState(tracksData);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState(tracksData);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks],
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id),
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  // Implement Saving the Playlist to a User's Account
  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <>
      {/* bg for whole page */}
      <div className="bg-conic/decreasing from-violet-700/50 via-lime-300/90 to-violet-700/50">
        {/* layout for whole page */}
        <div className="mx-4 h-full p-4">
          {/* sticky header */}
          <div className="sticky top-0">
            <header className="my-8 flex items-center justify-center gap-x-4 rounded-b-full border-2 p-4">
              <Drum size={64} className="fill-transparent stroke-1" />
              <h1 className="text-4xl hover:font-bold hover:tracking-widest">
                Jamming
              </h1>
            </header>

            {/* <!-- let the parent decide the search width so we can reuse it everywhere --> */}
            <div className="w-full">
              {/* <!-- search input --> */}
              <SearchBar onSearch={search} />
            </div>
            <div className="mt-8 flex min-h-screen gap-x-8">
              <div className="flex-1">
                <SearchResults searchResults={searchResults} onAdd={addTrack} />
              </div>
              <div className="flex-1">
                <Playlist
                  playlistName={playlistName}
                  playlistTracks={playlistTracks}
                  onNameChange={updatePlaylistName}
                  onRemove={removeTrack}
                  onSave={savePlaylist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
