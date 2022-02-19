import React from 'react';

export default function WatchlistItem({ item }) {

  return (
    <>
      <figure className={item.watched && 'watched'}>
        <figcaption>
          {item.title}
        </figcaption>
        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} 
          alt={item.title} />
        <div>
          <span title='Remove from watchlist'>➖</span>
          <span title='Mark as watched'>✔️</span>
        </div>
        <p>
          {item.overview}
        </p>
      </figure>
    </>
  );
}
