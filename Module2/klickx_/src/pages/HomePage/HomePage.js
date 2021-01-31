
import React, { Component } from 'react';
//import {BrowserRouter as Router} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import './HomePage.css';


class HomePage extends Component{

    render() {
        console.log('inside the home page');
        return(
                <div className='HomePage'>
                      
                        <div id="mySidenav" class="sidenav">      
                            {/* <Link to='/login'>Login</Link> */}
                            <Link to='/profile'>Profile</Link>
                            <Link to='/favorites'>Favorites</Link>
                            <Link to='/settings'>Settings</Link>
                            <Link to='/login'>Logout</Link>
                        </div>
                        <div className='mainContent'>
                            <div className='header'>
                                <h3>Display the selected Menu Name Here</h3>
                            </div>
                            <div className='userContent'>
                                    <p>I'm going to display the selected Menu contents</p>
                            </div>
                        </div>
                        
                        
                </div>
                    
            
        )
    }

}

export default HomePage;