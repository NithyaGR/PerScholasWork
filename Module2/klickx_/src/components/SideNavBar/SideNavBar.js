
import React from 'react';
import './SideNavBar.css';
import { Link, withRouter } from 'react-router-dom';

const SideNavBar = (props) => { //why props? learn this
    console.log('Rendering SideBar - Check the props and learn');
    console.log(props); // check here
    return (
        <div id="mySidenav" className="sidenav">      
                <Link to='/login'>Login</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/favorites'>Favorites</Link>
                <Link to='/settings'>Settings</Link>
                <Link to='/login'>Logout</Link>
        </div>
    )
}
export default withRouter(SideNavBar);