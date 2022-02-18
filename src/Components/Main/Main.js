import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link } from 'react-router-dom';
import Watchlist from './Watchlist';
import Auth from './Auth';

export default function Main({ user }) {
  return (
    <>
      <main>
        <Router>
          <Switch>
            <Route to='/'>
              {
                user
                  ? <Watchlist />
                  : <Auth />
              }
            </Route>
            <Route to='/watchlist'>

            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}
