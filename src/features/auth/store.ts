import { createStore, createEvent, createEffect } from 'effector';
import axios from '../../utils/axios';

interface Credentials {
  username: string;
  password: string;
}

// Event to set user data
interface User {
  id: number;
  username: string;
  role : string;
  // Add other user properties here
}

export const setUser = createEvent<User>();

// User store, initially set to null
export const $user = createStore<User | null>(null)
  .on(setUser, (_, user) => user);

  // Effect for fetching user data from API
export const fetchUserFx = createEffect(async () => {
    const response = await axios.get('/auth/me');
    return response.data; // Assume API returns user data
});

export const loginFx = createEffect(async (credentials: Credentials) => {
  const response = await axios.post('/auth/login', credentials);
  return response.data;
});

export const login = createEvent();
