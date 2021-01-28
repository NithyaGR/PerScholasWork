import React from 'react';
//import styles from './LoginForm.css';

const LoginForm = (props) => (
  <div className='loginForm'>
      <form>
               <input type='text' placeholder='Login_Id or Email' id='login' />
                <input type='password' placeholder='Password' id='password' />
                <button type='submit' id='loginButton' value='Login'>Login</button>             
      </form>
  </div>
);

export default LoginForm;
