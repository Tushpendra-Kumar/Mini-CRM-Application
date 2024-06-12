import React from 'react';

function Search({ searchText, onSearchChange }) {
    return (
        <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}

export default Search;
