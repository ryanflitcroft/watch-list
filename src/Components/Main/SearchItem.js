import React from 'react';
import { addItem, removeItem } from '../../services/fetch-utils';

export default function SearchItem({ item }) {

  async function handleAddItem() {
    const newItem = {
      title: item.title,
      poster_path: item.poster_path,
      release_date: item.release_date,
      overview: item.overview,
      movie_id: item.id,
      watched: false
    };

    await addItem(newItem);
  }

  async function handleRemoveItem() {
    await removeItem(item.id);
    console.log(item.id);
  }

  return (
    <>
      <figure>
        <figcaption>
          {item.title}
        </figcaption>
        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} 
          alt={item.title} />
        <div>
          <span onClick={handleRemoveItem}
            title='Remove from watchlist'>➖</span>
          <span onClick={handleAddItem}
            title='Add to watchlist'>➕</span>
        </div>
        <p>
          {item.overview}
        </p>
      </figure>
    </>
  );
}
