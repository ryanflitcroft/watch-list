import React from 'react';
import { useLocation } from 'react-router-dom';
import WatchlistItem from './WatchlistItem';

export default function Watchlist({ watchlist,
  setWatchlist,
  setLocation }) {

  const location = useLocation();
  setLocation(location.pathname);

  return (
    <>
      <h2>Your Watchlist</h2>
      <section>
        {
          watchlist.map((item, i) =>
            <WatchlistItem key={item + i}
              item={item}
              setWatchlist={setWatchlist} />
          )}
      </section>
    </>
  );
}