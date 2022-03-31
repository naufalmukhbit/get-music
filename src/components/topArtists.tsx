import { useState, useEffect } from "react";
import { ArtistType } from "../common/types";
import { API_KEY, BASE_URL } from "../config";
import { GET } from "../services/API";
import { DEFAULT_API_CONFIG } from "../services/configAPI";

const TopArtists = () => {
  const [artistData, setArtistData] = useState<ArtistType[]>([]);

  useEffect(() => {
    GET(BASE_URL, {
      method: DEFAULT_API_CONFIG.getTopArtists,
      api_key: API_KEY,
      format: "json",
    }).then((res) => {
      setArtistData(res.res.artists.artist);
    })
  }, []);

  return (
    <div className="mb-32">
      <h1 className="text-white font-extrabold text-6xl mb-8">
        Top Artists
      </h1>
      <div className="flex flex-row gap-6 overflow-x-scroll overflow-y-hidden no-scrollbar">
        {artistData.map((item) => {
          return (
            <div>
              <div className="h-60 w-60 bg-slate-600 mb-4" />
              <span className="text-white font-bold">
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TopArtists;