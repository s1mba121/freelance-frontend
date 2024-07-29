import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBar;
