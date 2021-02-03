//import LoginPage from '../LoginPage/LoginPage';

//here item is the current user object 

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const login = (data) => ({
    type: LOGIN_USER,
    payload: data
})

export const logout = (data) => ({
    type: LOGOUT_USER,
    payload: data
})