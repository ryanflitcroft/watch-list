import React from 'react';
import { getWatchlist,
  removeItem, 
  updateWatched } from '../../services/fetch-utils';

export default function WatchlistItem({ item,
  setWatchlist }) {

  async function handleRemove() {
    await removeItem(item.movie_id);
    const data = await getWatchlist();
    setWatchlist(data);
  }

  async function handleWatched() {
    await updateWatched(item.movie_id);
    const data = await getWatchlist();
    setWatchlist(data);
  }

  return (
    <>
      <figure>
        <figcaption>
          {item.title}
        </figcaption>
        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} 
          alt={item.title}
          className={item.watched && 'watched'} />
        <div>
          <span onClick={handleRemove}
            title='Remove from watchlist'>➖</span>
          <span onClick={handleWatched}
            title='Mark as watched'>✔️</span>
        </div>
        <p>
          {item.overview}
        </p>
      </figure>
    </>
  );
}
