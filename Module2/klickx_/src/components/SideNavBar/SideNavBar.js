
import React, { Component } from 'react';
import './SideNavBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/LoginLogoutAction';
import users from '../../reducers/users';

class SideNavBar extends Component {
 
    state = {
        users: users,
        currentUser: {
            name: '',
            isLoggedIn: ''
        }
        // isLoggedIn: false,
        // isRegistered: false
    }
    handleClick = (e) => {
        console.log('clicking logout link');
        this.props.logout();
    }
    render(){
        // console.log('Rendering SideBar');
        // console.log(this.props.users);
        console.log(this.props.isLoggedIn);
        console.log(this.props.name);
    return (
        <div id="mySidenav" className="sidenav">   

        <Link to='/home'>Home</Link>   
        {this.props.isLoggedIn  ? <Link to='/home'> Logout </Link> : <Link to='/login'> Login </Link>}
        <Link to='/profile'>Profile</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/settings'>Settings</Link>
        <div className='linkToLogOut' onClick={this.handleClick}>
            <Link to='/home'>Logout</Link>
        </div>
        </div>
    )
}
}
const mapStateToProps = (state) => ({
    users: state.users.users,
    // isLoggedIn : state.users.isLoggedIn,
    // isRegistered : state.users.isRegistered,
    currentUser: state.users.currentUser
    //name: state.users.currentUser.name
    
  })
 
  const mapDispatchToProps = (dispatch) => ({
    logout : data => dispatch(logout(data))
  })
//export default withRouter(SideNavBar);
export default connect(mapStateToProps, mapDispatchToProps)(SideNavBar)