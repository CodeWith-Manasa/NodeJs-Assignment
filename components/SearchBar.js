import React, { useState } from 'react';


export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/blog-search?query=${query}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error('Search request failed');
      }
    } catch (error) {
      console.error('Error during search:', error);
      alert("Error during search:")
    }
  };

  return (
    <div className="blog-search-container">
      <h2>Blog Search</h2>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Enter your search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="search-results">
        {searchResults !== null ? (
          searchResults.length > 0 ? (
            <ul>
              {searchResults.map((blog, index) => (
                <div key={index}>
                  <li>{blog}</li>
                </div>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )
        ) : null}
      </div>
    </div>
  );
}
