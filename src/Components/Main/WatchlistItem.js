import React from 'react';
import { getWatchlist,
  removeItem } from '../../services/fetch-utils';

export default function WatchlistItem({ item,
  setWatchlist }) {

  async function handleRemove() {
    await removeItem(item.movie_id);
    const data = await getWatchlist();
    setWatchlist(data);
  }

  return (
    <>
      <figure className={item.watched && 'watched'}>
        <figcaption>
          {item.title}
        </figcaption>
        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} 
          alt={item.title} />
        <div>
          <span onClick={handleRemove}
            title='Remove from watchlist'>➖</span>
          <span onClick={() => {}}
            title='Mark as watched'>✔️</span>
        </div>
        <p>
          {item.overview}
        </p>
      </figure>
    </>
  );
}
