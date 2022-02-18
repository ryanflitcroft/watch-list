import './App.css';
import { useState,
  useEffect } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    // getUser
    //setUser
  }, []);

  return (
    <>
      <Header user={user}
        setUser={setUser} />
      <Footer />
    </>
  );
}

export default App;