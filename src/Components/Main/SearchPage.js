import React, {
  useState 
} from 'react';
import SearchItem from './SearchItem';

export default function SearchPage({ watchlist,
  setWatchlist }) {
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`/.netlify/functions/themoviedb-endpoint?query=${search}`);

    const json = await response.json();
    setSearchResults(json.data.results);
    setLoading(false);
  }

  return (
    <>
      <section>
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
      </section>
      <section className='results'>
        {
          searchResults.map((item, i) =>
            <SearchItem key={item.title + i}
              item={item}
              watchlist={watchlist}
              setWatchlist={setWatchlist} />
          )
        }
      </section>
    </>
  );
}