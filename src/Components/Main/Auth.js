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
        <div>
          <span onClick={() => setNewUser(false)}
            className={!newUser && 'active'}>Sign In</span>
          <span onClick={() => setNewUser(true)}
            className={newUser && 'active'}>Sign Up</span>
        </div>
        <label htmlFor='email'>Email
          <input onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            type='email'
            required />
        </label>
        <label htmlFor='password'>Password
          <input onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
            type='password'
            minLength='6'
            required />
        </label>
        <button
          type='submit'
          form='auth-form'>{
            !newUser
              ? 'Sign in'
              : 'Sign up'
          }</button>
      </form>
    </>
  );
}
