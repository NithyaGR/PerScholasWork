
import React, { Component } from 'react';
import './SideNavBar.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SideNavBar extends Component {
 
    render(){
        // console.log('Rendering SideBar');
        // console.log(this.props.users);
    return (
        <div id="mySidenav" className="sidenav">   
                <Link to='/home'>Home</Link>   
                <Link to='/login'>Login</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/favorites'>Favorites</Link>
                <Link to='/settings'>Settings</Link>
                {/* <Link to='/login'>Logout</Link> */}
        </div>
    )
}
}
const mapStateToProps = (state) => ({
    users: state.users.users
  })
//export default withRouter(SideNavBar);
export default connect(mapStateToProps)(SideNavBar)