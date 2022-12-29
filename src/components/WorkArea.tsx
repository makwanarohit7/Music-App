import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Favourites from "./Favourites";
import Home from "./Home";
import Playlists from "./Playlists";
import Search from "./Search";

export interface SongProps {
  title: string;
  url: string;
  images: {
    coverart: string;
  };
}
export interface DataProps {
  tracks: SongProps[];
}

export default function WorkArea() {
  const [keylist, setKeylist] = useState<SongProps[]>([]);
  const [playlist, setPlaylist] = useState<SongProps[]>([]);

  console.log(keylist);
  console.log(playlist);

  const handleFavListClick = (song: SongProps) => {
    setKeylist([...keylist, song]);
  };

  const handlePlayListClick = (song: SongProps) => {
    setPlaylist([...playlist, song]);
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onPlayListClick={handlePlayListClick}
              onFavListClick={handleFavListClick}
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Favourites keylist={keylist} />} />
        <Route path="/playlists" element={<Playlists playlist={playlist} />} />
      </Routes>
    </div>
  );
}
