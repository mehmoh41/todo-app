import { Search } from "@styled-icons/material";
import React from "react";

const SearchBox = ({ className }) => {
  return (
    <div className={`${className} relative`}>
      <input
        type="text"
        placeholder="Search"
        className="w-64 px-4 py-2 pl-10 pr-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search
        size={18}
        color="gray"
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
      />
    </div>
  );
};

export default SearchBox;
