import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/LoginLogoutAction';
import './Settings.css';

class Settings extends Component {

    handleClick = (e) => {
       let deleteMe = prompt("Are you sure to delete yor account?",'yes');
         if(deleteMe === 'yes'){
            this.props.deleteAccount(this.props.name);
            alert('Your Account is Deleted! We miss you already!');
            this.props.history.push('/home');
         }
         else{
             console.log('no deleting');
         }

    }
    render() {
        return (
            <div className='settings'>    
                 <h3> Hi {this.props.name} </h3>
                 <h3>Delete My Account!</h3>
                 <br />
                 <button id='deleteAccount' onClick={this.handleClick}>Delete</button>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({
    name : state.users1.newUser.name
})
const mapDispatchProps = (dispatch) => ({
    deleteAccount : data => dispatch(logout(data))
})
export default connect(mapStateToProps, mapDispatchProps)(Settings);