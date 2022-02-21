import React,
{ useEffect } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink } from 'react-router-dom';
import { getWatchlist } from '../../services/fetch-utils';
import Watchlist from './Watchlist';
import Auth from './Auth';
import SearchPage from './SearchPage';

export default function Main({ user,
  setUser,
  watchlist,
  setWatchlist }) {

  useEffect(() => {
    async function getData() {
      const data = await getWatchlist();
      setWatchlist(data);
    }
    getData();
  }, [setWatchlist]);

  return (
    <>
      <main>
        <Router>
          <NavLink to='/watchlist'>
            Your watchlist
          </NavLink>
          <NavLink to='/search'>
            Search Movies
          </NavLink>
          {/* TODO: useLocation to conditionally render NavLink, useState for variable location */}
          <Switch>
            <Route exact path='/'>
              {
                !user
                  ? <Auth setUser={setUser} />
                  : <Watchlist watchlist={watchlist}
                    setWatchlist={setWatchlist} />
              }
            </Route>
            <Route exact path='/watchlist'>
              {
                user
                  ? <Watchlist watchlist={watchlist}
                    setWatchlist={setWatchlist} />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/search'>
              {
                user
                  ? <SearchPage watchlist={watchlist}
                    setWatchlist={setWatchlist} />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}