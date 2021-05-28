
import React from 'react';

const SearchEvents = ({ setUrl, query, setQuery }) => {
  return (
    <form onSubmit={e => {
      setUrl(`http://localhost:3000/events?q=${query}`);
      e.preventDefault();
    }}>
      <input type="text" value={query} placeholder="Search" onChange={e => setQuery(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  )
};

export default SearchEvents;