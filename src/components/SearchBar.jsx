import { Search } from "lucide-react";
import React, { useState, useCallback } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = useCallback((event) => {
    setSearchInput(event.target.value);
  }, []);
  const search = useCallback(() => {
    props.onSearch(searchInput);
  }, [props.onSearch, searchInput]);

  return (
    <>
      <div className="flex items-center justify-center gap-x-4 rounded-t-full border-2 p-4">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Your Music !!"
          className="rounded-4xl sticky top-0 my-8 w-auto border-2 p-4 text-center font-bold"
          onChange={handleSearchInputChange}
        />
        <button
          type="button"
          className="mx-4 rounded-full border p-4"
          onClick={search}
        >
          <Search size={32} />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
