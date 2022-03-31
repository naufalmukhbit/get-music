import { useState, useEffect } from "react";
import { TrackType } from "../common/types";
import { API_KEY, BASE_URL } from "../config";
import { GET } from "../services/API";
import { DEFAULT_API_CONFIG } from "../services/configAPI";

const TopSongs = () => {
  const [songsData, setSongsData] = useState<TrackType[]>([]);

  useEffect(() => {
    GET(BASE_URL, {
      method: DEFAULT_API_CONFIG.getTopTracks,
      api_key: API_KEY,
      format: "json",
    }).then((res) => {
      setSongsData(res.res.tracks.track);
    })
  }, []);

  return (
    <div className="mb-32">
      <h1 className="text-white font-extrabold text-6xl mb-8">
        Top Songs
      </h1>
      <div className="flex flex-row gap-6 overflow-x-scroll overflow-y-hidden no-scrollbar">
        {songsData.map((item) => {
          return (
            <div>
              <div className="h-60 w-60 bg-slate-600 mb-4" />
              <div className="flex flex-col w-60 pl-1 pr-4">
                <span className="text-white font-bold truncate">
                  {item.name}
                </span>
                <span className="text-gray-400">
                  {item.artist.name}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TopSongs;