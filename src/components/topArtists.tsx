import { useState, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ArtistType } from "../common/types";
import { API_KEY, BASE_URL } from "../config";
import { GET } from "../services/API";
import { DEFAULT_API_CONFIG } from "../services/configAPI";

const TopListItem = lazy(() => import("./topItem"));

const TopArtists = () => {
  const [artistData, setArtistData] = useState<ArtistType[]>([]);

  useEffect(() => {
    GET(BASE_URL, {
      method: DEFAULT_API_CONFIG.getTopArtists,
      limit: 10,
      api_key: API_KEY,
      format: "json",
    }).then((res) => {
      setArtistData(res.res.artists.artist);
    });
  }, []);

  return (
    <div className="mb-16 lg:mb-32">
      <div className="px-10 mb-4 flex flex-row justify-between items-center lg:px-20 lg:mb-8">
        <h1 className="text-white font-extrabold text-3xl lg:text-6xl">
          Top Artists
        </h1>
        <Link
          to="/top-artists"
          className="text-white/60 pt-1 text-sm lg:pt-4 lg:text-base hover:text-white/80 transition"
        >
          SEE MORE
        </Link>
      </div>
      <div className="flex flex-row gap-3 lg:gap-6 overflow-x-scroll overflow-y-hidden no-scrollbar px-10 lg:px-20">
        {artistData.map((item, index) => (
          <Suspense fallback="Loading" key={item.name + index}>
            <TopListItem item={item} index={index} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
