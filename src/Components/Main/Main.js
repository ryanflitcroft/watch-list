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
  setWatchlist,
  location,
  setLocation }) {

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
          {
            (location !== '/watchlist' && location !== '/')
              && <NavLink to='/watchlist'>
              Your watchlist
              </NavLink>
          }
          {
            (location !== '/search' && location !== '/')
              && <NavLink to='/search'>
              Search Movies
              </NavLink>
          }
          <Switch>
            <Route exact path='/'>
              {
                !user
                  ? <Auth setUser={setUser} />
                  : <Redirect to='/watchlist' />
              }
            </Route>
            <Route exact path='/watchlist'>
              {
                user
                  ? <Watchlist watchlist={watchlist}
                    setWatchlist={setWatchlist}
                    setLocation={setLocation} />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/search'>
              {
                user
                  ? <SearchPage watchlist={watchlist}
                    setWatchlist={setWatchlist}
                    setLocation={setLocation} />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}