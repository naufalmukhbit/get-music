import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Background from "./components/background";
import Header from "./components/header";
import SearchOverlay from "./components/searchOverlay";
import TopArtists from "./components/topArtists";
import TopSongs from "./components/topSongs";
import ListTopArtist from "./pages/TopArtists.page";
import ListTopTracks from "./pages/TopTracks.page";

function App() {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      {searchActive && <SearchOverlay setSearch={setSearchActive} />}
      <Header setSearch={setSearchActive} />
      <div className="h-8" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full z-10 mt-2 lg:mt-8">
              <TopSongs />
              <TopArtists />
            </div>
          }
        />
        <Route path="/top-artists" element={<ListTopArtist />} />
        <Route path="/top-tracks" element={<ListTopTracks />} />
      </Routes>
      <footer className="z-10 mb-6 text-white/20">
        Data provided by{" "}
        <a href="https://www.last.fm/api" className="underline">
          Last.fm
        </a>
      </footer>
      <Background />
    </div>
  );
}

export default App;
