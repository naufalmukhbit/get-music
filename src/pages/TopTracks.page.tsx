import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TrackType } from "../common/types";
import { API_KEY, BASE_URL } from "../config";
import { GET } from "../services/API";
import { DEFAULT_API_CONFIG } from "../services/configAPI";

const ListTopTracks = () => {
  const [songsData, setSongsData] = useState<TrackType[]>([]);

  useEffect(() => {
    GET(BASE_URL, {
      method: DEFAULT_API_CONFIG.getTopTracks,
      limit: 100,
      api_key: API_KEY,
      format: "json",
    }).then((res) => {
      setSongsData(res.res.tracks.track);
    });
  }, []);

  const formatNumber = (count: string) =>
    count.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="w-full z-10 max-w-5xl mb-10 px-10">
      <Link className="text-white/40 hover:text-white/80 transition" to="/">
        &larr; Back
      </Link>
      <div className="h-4" />
      <h1 className="text-white font-extrabold text-3xl lg:text-6xl">
        Top Songs
      </h1>
      <div className="h-12" />
      <table className="text-white w-full">
        <thead>
          <tr className="h-10 border-b border-white/30">
            <td className="text-center">#</td>
            <td>Title</td>
            <td className="px-4 text-right">Plays</td>
          </tr>
        </thead>
        <tbody>
          {songsData.map((item, index) => (
            <tr className="h-16 border-b border-white/10">
              <td className="px-4 text-center">{index + 1}</td>
              <td className="w-full">
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-xs text-white/60">
                    {item.artist.name}
                  </span>
                </div>
              </td>
              <td className="px-4 text-right">
                {formatNumber(item.playcount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTopTracks;
