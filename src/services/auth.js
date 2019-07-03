const TOKEN = '@pizzadonjuan:token';
const USER = '@pizzadonjuan:user';

export const getAuthToken = () => JSON.parse(localStorage.getItem(TOKEN));

export const setAuthToken = token => localStorage.setItem(TOKEN, JSON.stringify(token));

export const setUser = user => localStorage.setItem(USER, JSON.stringify(user));

export const getUser = () => JSON.parse(localStorage.getItem(USER));

export const isAuthenticated = () => !!localStorage.getItem(TOKEN);

export const removeAuthToken = () => localStorage.removeItem(TOKEN);

export const removeUser = () => localStorage.removeItem(USER);
