import { ArtistType, TrackType } from "../common/types";

interface TopListItemProps {
  item: TrackType | ArtistType;
  index: number;
  artistName?: string;
}

const TopListItem = ({item, index, artistName}: TopListItemProps) => {
  let imageURL = item.image.find((item) => item.size === "large");
  return (
    <div key={item.name + index}>
      {/* <div className="h-44 w-44 lg:h-60 lg:w-60 bg-slate-600 mb-4" /> */}
      <img src={imageURL?.["#text"]} alt="Item Art" className="h-44 w-44 lg:h-60 lg:w-60 mb-4" />
      <div className="flex flex-col w-44 lg:w-60 pl-1 pr-4">
        <span className="text-white font-bold truncate">
          {item.name}
        </span>
        {artistName && (
          <span className="text-gray-400">
            {artistName}
          </span>
        )}
      </div>
    </div>
  )
}

export default TopListItem;