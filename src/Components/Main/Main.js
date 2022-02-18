import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link } from 'react-router-dom';
import Watchlist from './Watchlist';
import Auth from './Auth';

export default function Main({ user,
  setUser }) {
  return (
    <>
      <main>
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