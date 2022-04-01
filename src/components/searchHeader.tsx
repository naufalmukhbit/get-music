import { ChangeEvent } from "react";

interface SearchHeaderProps {
  query: string;
  category: "Artist" | "Song",
  setSearch: (value: boolean) => void;
  setQuery: (value: string) => void;
  setCategory: (value: "Artist" | "Song") => void;
}

const SearchHeader = ({
  query,
  category,
  setSearch,
  setQuery,
  setCategory,
}: SearchHeaderProps) => {
  const onCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Artist" || e.target.value === "Song") {
      setCategory(e.target.value);
    } else {
      setCategory("Artist");
    }
    setQuery("");
  };

  return (
    <header className="w-full py-4 bg-black/50 backdrop-blur-md">
      <div className="flex flex-row gap-6 justify-between items-center px-8">
        <button onClick={() => setSearch(false)}>
          <svg
            className="invert"
            width={10}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
          </svg>
        </button>
        <div className="w-full flex flex-row gap-2">
          <select
            onChange={onCategoryChange}
            className="w-60 px-4 rounded-lg border-r-2 bg-slate-800/50 text-white border-slate-900 focus:outline-none"
          >
            <option selected={category === "Artist"} value="Artist">
              Artist
            </option>
            <option selected={category === "Song"} value="Song">
              Song
            </option>
          </select>
          <input
            value={query}
            className="w-full h-12 rounded-lg px-4 bg-slate-800/50 text-white focus:outline-none"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button>
          <svg
            className="invert"
            width={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
