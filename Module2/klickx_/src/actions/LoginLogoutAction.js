//import LoginPage from '../LoginPage/LoginPage';

//here item is the current user object 

export const LOGIN_USER = 'LOGIN_USER'

export const login = (item) => ({
    type: LOGIN_USER,
    payload: item
})