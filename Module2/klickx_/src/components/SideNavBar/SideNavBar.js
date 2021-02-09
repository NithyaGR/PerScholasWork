
import React, { Component } from 'react';
import './SideNavBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/LoginLogoutAction';

class SideNavBar extends Component {
 
 
    handleClick = (e) => {
        console.log('clicking side bar');
        if(e.target.id === 'logout'){
            console.log('clicking logout link');
            this.props.logoutUser();
        }
    }
    render(){
        console.log('Rendering SideBar');
        console.log(this.props.newUser);
        console.log(this.props.isLoggedIn);
        // console.log(this.props.name);
    return (
        <div id="mySidenav" className="sidenav" onClick={this.handleClick}>   
        {!this.props.isLoggedIn ?
        <div>
        <Link to='/home'> Home </Link> 
        <Link to='/login'> Login </Link>
        <Link to='/home'> Profile </Link>
        <Link to='/home'> Favorites </Link>
        <Link to='/home'> Settings </Link>  
        </div> 
          :
        <div>  
        <Link id='myHome' to='/userHome'>MyHome</Link> 
        <Link id='logout' to='/home'> Logout </Link>
        <Link id='profile' to='/profile'> Profile </Link>
        <Link id='favorites' to='/favorites'> Favorites </Link>
        <Link id='settings' to='/settings'> Settings </Link>  
        </div>
        }
        </div>
    )
}
}
// We need to map the props to retrieve the status whether the user is logged in or not or just 
//registered. LHS keys are user defined names - RHS values are from the reducers
const mapStateToProps = (state) => ({
    //newUser: state.users.newUser, //coming from registration reducers through index named as users
    newUser: state.users1.newUser, // coming from klickx_ reducers through users1 from index
    isLoggedIn: state.users1.newUser.isLoggedIn
    
  })
 
  const mapDispatchToProps = (dispatch) => ({
    logoutUser : data => dispatch(logout(data))
  })
//export default withRouter(SideNavBar);
export default connect(mapStateToProps, mapDispatchToProps)(SideNavBar)