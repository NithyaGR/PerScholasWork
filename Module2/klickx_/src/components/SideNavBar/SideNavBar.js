
import React, { Component } from 'react';
import './SideNavBar.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import users from '../../reducers/users';

class SideNavBar extends Component {
 
    state = {
        users: users,
        isLoggedIn: false,
        isRegistered: false
    }
    render(){
        // console.log('Rendering SideBar');
        // console.log(this.props.users);
        console.log(this.props.isLoggedIn);
    return (
        <div id="mySidenav" className="sidenav">   
        <Link to='/home'>Home</Link>   
        {this.props.isLoggedIn  ? <Link to='/home'> Logout </Link> : <Link to='/login'> Login </Link>}
        <Link to='/profile'>Profile</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/settings'>Settings</Link>
        {/* <Link to='/home'>Logout</Link> */}
        </div>
    )
}
}
const mapStateToProps = (state) => ({
    users: state.users.users,
    isLoggedIn : state.users.isLoggedIn,
    isRegistered : state.users.isRegistered
  })
//export default withRouter(SideNavBar);
export default connect(mapStateToProps)(SideNavBar)