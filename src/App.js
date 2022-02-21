import './App.css';
import { 
  useState,
  useEffect
} from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import getUser, { getWatchlist } from './services/fetch-utils';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
  const [watchlist, setWatchlist] = useState([]);
  const [params, setParams] = useState('');

  useEffect(() => {
    async function getData() {
      const user = await getUser();
      setUser(user);
      const data = await getWatchlist();
      setWatchlist(data);
    }
    getData();
  }, [user]);

  return (
    <>
      <Header user={user} />
      <Main user={user}
        setUser={setUser}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
        params={params}
        setParams={setParams} />
      <Footer />
    </>
  );
}

export default App;