import React from 'react';
import { Link } from 'react-router-dom';
import './UserHomePage.css';


const UserHomePage = () => {
    return (
        <>
            <div className='userHomePage'>
                
                    <div className='userHeader'>
                                <h3>Welcome to Klickx_ ! Once Logged in - print the name of the user here </h3>
                    </div>
                    <div className='userContent'>
                                    <p>I'm going to display the selected Menu contents</p>
                     </div>
                    
                </div>
                
            </div>
        </>
    )
}
export default UserHomePage;