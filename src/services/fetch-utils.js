import { client,
  checkError } from '../../services/client';

export default function getUser() {

  return client.auth.session();
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({
    email,
    password
  });

  return response.user;
}

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({
    email,
    password
  });

  return response.user;
}

export async function signOutUser() {
  await client.auth.signOut();
  
  return window.location.href = '../';
}