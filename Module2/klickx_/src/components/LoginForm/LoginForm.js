import React from 'react';
import styles from './LoginForm.css';

const LoginForm = (props) => (
  <div className='loginForm'>
      <form>
          <input type='text' placeHolder='Login_Id or Email' id='login' />
          <input type='password' placeHolder='Password' id='password' />
          <button type='submit' value='Login'>Login</button>
      </form>
  </div>
);

export default LoginForm;
