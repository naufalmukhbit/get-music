import React from "react";
import Background from "./components/background";
import Header from "./components/header";
import TopArtists from "./components/topArtists";
import TopSongs from "./components/topSongs";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <Header />
      <div className="h-16" />
      <div className="lg:max-w-4xl w-full z-10 px-8">
        <TopArtists />
        <TopSongs />
      </div>
      <footer className="z-10 mb-6 text-white/20">
        Data provided by
        {' '}
        <a href="https://www.last.fm/api" className="underline">
          Last.fm
        </a>
      </footer>
      <Background />
    </div>
  );
}

export default App;
