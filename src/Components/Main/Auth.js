import React from 'react';
import { useState } from 'react';
import getUser, { signInUser, signUpUser } from '../../services/fetch-utils';

export default function Auth({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    {
      !newUser
        ? await signInUser(email, password)
        : await signUpUser(email, password);
    }
    const user = await getUser();
    setUser(user);
    
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}
        id='auth-form'>
        <label htmlFor='email'>Email</label>
        <input onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          required />
        <input onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          minLength='6'
          required />
        {
          !newUser
            ? <button
              type='submit'
              form='auth-form'>SignIn</button>
            : <button type='submit'
              form='auth-form'>SignUp</button>
        }
      </form>
    </>
  );
}
