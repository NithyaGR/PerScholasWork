import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
    return (
        <>
            
            <h3>Register - Create a User Account  </h3>
            <form className='registerForm'>
                <input type='text' placeholder='Name' id='name' />    
                <input type='text' placeholder='Email' id='email' />
                <input type='password' placeholder='Password' id='password' />
                <input type='password' placeholder='confirmPassword' id='confirmPassword' />
                <button type='submit' id='registerButton' value='register'>Register</button>
            </form>
            <Link to='/login'> LoginPage </Link>
            
        </>
    )
}

export default RegisterPage;
