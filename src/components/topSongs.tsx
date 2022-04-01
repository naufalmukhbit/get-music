import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { TrackType } from "../common/types";
import { API_KEY, BASE_URL } from "../config";
import { GET } from "../services/API";
import { DEFAULT_API_CONFIG } from "../services/configAPI";

const TopListItem = lazy(() => import("./topItem"));

const TopSongs = () => {
  const [songsData, setSongsData] = useState<TrackType[]>([]);

  useEffect(() => {
    GET(BASE_URL, {
      method: DEFAULT_API_CONFIG.getTopTracks,
      limit: 10,
      api_key: API_KEY,
      format: "json",
    }).then((res) => {
      setSongsData(res.res.tracks.track);
    });
  }, []);

  return (
    <div className="mb-16 lg:mb-32">
      <div className="px-10 mb-4 flex flex-row justify-between items-center lg:px-20 lg:mb-8">
        <h1 className="text-white font-extrabold text-3xl lg:text-6xl">
          Top Songs
        </h1>
        <Link
          to="/top-tracks"
          className="text-white/60 pt-1 text-sm lg:pt-4 lg:text-base hover:text-white/80 transition"
        >
          SEE MORE
        </Link>
      </div>
      <div className="flex flex-row gap-3 lg:gap-6 overflow-x-scroll overflow-y-hidden no-scrollbar px-10 lg:px-20">
        {songsData.map((item, index) => (
          <Suspense fallback="Loading" key={item.name + index}>
            <TopListItem item={item} index={index} artist={item.artist} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default TopSongs;
