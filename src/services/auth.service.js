import axios from 'axios';
import apiurl from './apiurl';

const APIURL = `${apiurl()}/api/auth/`;

const addUser = (data) => {
  return axios.post(APIURL.concat('signup'), data);
};

const login = (data) => {
  return axios
    .post(APIURL.concat('signin'), data)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('department', response.data.department);
      }
      return response;
    })
    .catch((error) => {
      return error.message;  
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const getEmail = () => {
  return localStorage.getItem('email');
}

const getDepartment = () => {
  return localStorage.getItem('department');
}

const changePassword = (email, oldPassword, newPassword, repeatPassword) => {
  return axios.post(APIURL.concat('changepass'), {
    email, oldPassword, newPassword, repeatPassword
  });
}

const changeNewPassword = (email, newPassword) => {
  return axios.post(APIURL.concat('changenewpass'), { email, newPassword });
}

const AuthService = { addUser, login, logout, getCurrentUser, getEmail,
  getDepartment, changePassword, changeNewPassword };

export default AuthService;
