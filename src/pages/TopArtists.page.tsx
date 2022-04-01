import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArtistType } from "../common/types";
import { API_KEY, BASE_URL } from "../config";
import { GET } from "../services/API";
import { DEFAULT_API_CONFIG } from "../services/configAPI";

const ListTopArtist = () => {
  const [artistData, setArtistData] = useState<ArtistType[]>([]);

  useEffect(() => {
    GET(BASE_URL, {
      method: DEFAULT_API_CONFIG.getTopArtists,
      limit: 100,
      api_key: API_KEY,
      format: "json",
    }).then((res) => {
      setArtistData(res.res.artists.artist);
    });
  }, []);

  const formatNumber = (count: string) =>
    count.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="w-full z-10 max-w-5xl mb-10">
      <Link className="text-white/40 hover:text-white/80 transition px-4 md:px-10" to="/">
        &larr; Back
      </Link>
      <div className="h-4" />
      <h1 className="text-white font-extrabold text-3xl px-4 md:px-10 lg:text-6xl">
        Top Artists
      </h1>
      <div className="h-6 lg:h-12" />
      <table className="text-white w-full md:px-10">
        <thead>
          <tr className="h-10 border-b border-white/30">
            <td className="text-center">#</td>
            <td>Artist</td>
            <td className="px-4 text-right">Listeners</td>
          </tr>
        </thead>
        <tbody>
          {artistData.map((item, index) => (
            <tr className="h-16 border-b border-white/10">
              <td className="px-4 text-center">{index + 1}</td>
              <td className="w-full">{item.name}</td>
              <td className="px-4 text-right">
                {formatNumber(item.listeners)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTopArtist;
