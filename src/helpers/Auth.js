
export const currentUser = () => JSON.parse(localStorage.user);

export const isLoggedIn = () => {
  if (localStorage.getItem('token') !== null) return true;
  return false;
}

export const token = localStorage.getItem('token');

export const logout = (cb) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  cb();
}

export const checkAuth = (nextState, replace, callback) => {
  if (!isLoggedIn()) {
    replace('/');
  }
  return callback();
};
