import React,
{ useState,
  useEffect } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink } from 'react-router-dom';
import { signOutUser,
  getWatchlist } from '../../services/fetch-utils';
import Watchlist from './Watchlist';
import Auth from './Auth';
import SearchPage from './SearchPage';

export default function Main({ user,
  setUser }) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getWatchlist();
      setWatchlist(data);
    }
    getData();
  }, []);

  return (
    <>
      <main>
        <button onClick={signOutUser}
          type='button'>Sign Out</button>
        <Router>
          <NavLink to='/watchlist'>
            Your watchlist
          </NavLink>
          <NavLink to='/search'>
            Search Movies
          </NavLink>
          <Switch>
            <Route exact path='/'>
              {
                !user
                  ? <Auth setUser={setUser} />
                  : <Watchlist watchlist={watchlist} />
              }
            </Route>
            <Route exact path='/watchlist'>
              {
                user
                  ? <Watchlist watchlist={watchlist} />
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