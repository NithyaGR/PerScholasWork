import React from 'react';
import { Link } from 'react-router-dom';
import './UserHomePage.css';


const UserHomePage = () => {
    const name = localStorage.getItem('name');
    console.log(name);
    return (
        
       
        <>
            <div className='userHomePage'>
                
                    <div className='userHeader'>
                                <h3>Welcome to Klickx_ {name} </h3>
                    </div>
                    <div className='userContent'>
                                    <p>I'm going to display the selected Menu contents</p>
                    </div>
                
            </div>
        </>
    )
}
export default UserHomePage;