export const isLoggedIn = () => localStorage.getItem('token') !== null

export const token = () => localStorage.getItem('token');
