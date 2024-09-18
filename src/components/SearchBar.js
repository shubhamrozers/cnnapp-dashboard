// src/components/SearchBar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/widgetSlice';

function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search widgets..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
