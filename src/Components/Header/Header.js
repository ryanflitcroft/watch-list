import React from 'react';
import { signOutUser } from '../../services/fetch-utils';

export default function Header() {
  return (
    <>
      <header>
        <h1>Be Kind ⏪</h1>
        <button onClick={signOutUser}
          type='button'>Sign Out</button>
      </header>
    </>
  );
}
