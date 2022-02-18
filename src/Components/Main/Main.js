import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link } from 'react-router-dom';
import { signOutUser } from '../../services/fetch-utils';
import Watchlist from './Watchlist';
import Auth from './Auth';

export default function Main({ user,
  setUser }) {
  return (
    <>
      <main>
        <button onClick={signOutUser}
          type='button'>Sign Out</button>
        <Router>
          <Switch>
            <Route to='/'>
              {
                !user
                  ? <Auth setUser={setUser} />
                  : <Watchlist />
              }
            </Route>
            <Route to='/watchlist'>
              {
                user
                  ? <Watchlist />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}