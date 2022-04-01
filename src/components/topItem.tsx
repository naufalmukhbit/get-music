import { ArtistType, TrackType } from "../common/types";

interface TopListItemProps {
  item: TrackType | ArtistType;
  index: number;
  artist?: {
    name: string;
    mbid: string;
    url: string;
  };
}

const TopListItem = ({item, index, artist}: TopListItemProps) => {
  let imageURL = item.image.find((item) => item.size === "large");
  return (
    <div key={item.name + index}>
      <img src={imageURL?.["#text"]} alt="Item Art" className="h-44 w-44 lg:h-60 lg:w-60 mb-4" />
      <div className="flex flex-col w-44 lg:w-60 pl-1 pr-4">
        <a href={item.url} className="text-white font-bold truncate hover:underline">
          {item.name}
        </a>
        {artist && (
          <a href={artist.url} className="text-gray-400 hover:underline">
            {artist.name}
          </a>
        )}
      </div>
    </div>
  )
}

export default TopListItem;