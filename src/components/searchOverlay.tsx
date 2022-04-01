import SearchHeader from "./searchHeader";
import { useEffect, useRef, useState } from "react";
import { API_KEY, BASE_URL } from "../config";
import { GET } from "../services/API";
import { DEFAULT_API_CONFIG } from "../services/configAPI";

const SearchOverlay = ({
  setSearch,
}: {
  setSearch: (value: boolean) => void;
}) => {
  type resultType = {
    name: string;
    url: string;
    songBy?: string;
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<"Artist" | "Song">("Artist");
  const [searchResults, setSearchResults] = useState<resultType[]>([]);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery !== "") {
      let query = {
        method:
          category === "Artist"
            ? DEFAULT_API_CONFIG.searchArtists
            : DEFAULT_API_CONFIG.searchTracks,
        [category === "Artist" ? "artist" : "track"]: searchQuery,
      };

      GET(BASE_URL, {
        ...query,
        api_key: API_KEY,
        format: "json",
      }).then((res) => {
        resultRef.current?.scrollTo({ top: 0, left: 0 });
        let apiRes =
          res.res.results[
            category === "Artist" ? "artistmatches" : "trackmatches"
          ];
        setSearchResults(
          apiRes[category === "Artist" ? "artist" : "track"].map(
            (match: any) => ({
              name: match.name,
              url: match.url,
              songBy: match.artist,
            })
          )
        );
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, category]);

  return (
    <div className="bg-black/70 backdrop-blur-xl h-screen w-screen inset-0 z-30 fixed flex flex-col">
      <SearchHeader
        query={searchQuery}
        category={category}
        setSearch={setSearch}
        setQuery={setSearchQuery}
        setCategory={setCategory}
      />
      <div
        ref={resultRef}
        className="overflow-x-hidden overflow-y-auto h-full pb-4 border-y border-white/10"
      >
        {searchQuery !== "" &&
          searchResults &&
          searchResults.length > 0 &&
          searchResults.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="border-y border-white/10 text-white p-4 flex flex-col cursor-pointer hover:bg-white/10 transition-colors"
            >
              {item.name}
              {category === "Song" && (
                <span className="text-xs text-white/50">{item.songBy}</span>
              )}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SearchOverlay;
