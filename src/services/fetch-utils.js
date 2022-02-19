import { client,
  checkError } from './client';

async function getUser() {

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

export async function addItem(item) {
  const response = await client
    .from('watchlist')
    .insert(item);

  return checkError(response);
}

export async function removeItem(id) {
  const response = await client
    .from('watchlist')
    .delete()
    .match({ movie_id: id });

  return checkError(response);
}

export async function updateWatched(id) {
  const response = await client
    .from('watchlist')
    .update({ watched: true })
    .match({ movie_id: id });

  return checkError(response);
}

export async function getWatchlist() {
  const response = await client
    .from('watchlist')
    .select()
    .order('title', { ascending: true });

  return checkError(response);
}

export default getUser;