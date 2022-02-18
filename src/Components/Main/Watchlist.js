import React,
{ useState,
  useEffect } from 'react';
import WatchlistItem from './WatchlistItem';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/.netlify/functions/themoviedb-endpoint?query=${search}`);
    console.log('||response', response);

    const json = await response.json();
    setSearchResults(json);
    setLoading(false);
  }

  return (
    <>
      <h2>Your Watchlist</h2>
      {
        loading && 'loading...'
      }
      <form onSubmit={handleSubmit}
        id='search-form'>
        <label htmlFor='search'>Titles
          <input onChange={(e) => setSearch(e.target.value)}
            value={search}
            name='search'
            type='text' />
          <button type='submit'
            form='search-form'>Search</button>
        </label>
      </form>
      <section>
        {watchlist.map((item, i) =>
          <WatchlistItem key={item + i}
            item={item} />
        )}
      </section>
    </>
  );
}
