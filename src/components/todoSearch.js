import React, { useState } from "react";

const TaskSearch = ({ tasks, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        className="w-full border border-gray-300 rounded py-2 px-3 mb-2"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TaskSearch;
