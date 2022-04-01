import React, { useState } from "react";
import Background from "./components/background";
import Header from "./components/header";
import SearchHeader from "./components/searchHeader";
import SearchOverlay from "./components/searchOverlay";
import TopArtists from "./components/topArtists";
import TopSongs from "./components/topSongs";

function App() {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      {searchActive && <SearchOverlay setSearch={setSearchActive} />}
      <Header setSearch={setSearchActive} />
      <div className="h-16" />
      <div className="w-full z-10">
        <TopArtists />
        <TopSongs />
      </div>
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
