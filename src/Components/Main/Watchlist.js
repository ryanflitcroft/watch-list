import React,
{ useEffect } from 'react';
import WatchlistItem from './WatchlistItem';

export default function Watchlist({ watchlist,
  setWatchlist }) {

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
