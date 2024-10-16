"use client";

import { useState } from "react";

export default function Searchbar({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSearchChange = (e) => {
    setInput(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <form className="max-w-lg mx-auto">
      <div className="flex">
        <input
          type="search"
          value={input}
          onChange={handleSearchChange}
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search products..."
          required
        />
      </div>
    </form>
  );
}
