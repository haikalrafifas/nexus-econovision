const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (value) => {
  return localStorage.setItem('token', value);
};

const removeToken = () => {
  return localStorage.removeItem('token');
};

const decodeToken = () => {
  try {
    const token = getToken();
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  } catch (error) {
    console.error("Error decoding token:", error);
    // window.location.href = 'pages/login.html';
  }
};

const isAuthPage = () => {
  return window.location.pathname.includes('login.html');
};

const token = getToken();
const userData = decodeToken();

if ((!token || !userData) && !isAuthPage()) {
  window.location.href = '/pages/login.html';
}

if (token && userData && isAuthPage()) {
  window.location.href = '/';
}

window.getToken = getToken;
window.setToken = setToken;
window.removeToken = removeToken;
window.userData = userData;

if (userData.image === null) {
  window.userData.image = '/assets/img/goku.png';
}
