import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register }  from '../../actions/RegisterUserAction';
import history from '../../helpers/history';
import './RegisterPage.css';
import users from '../../reducers/users';

class RegisterPage extends Component {

    state = {
        users: users,   
        name: '',
        email: '',
        password: '',
        isRegistered: false
    }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({ submitted: true });
        console.log(this.state);
        //const { newUser } = this.state; //this is as same as grabbing from name store into name id and etc
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }    
      
        if (newUser.name && newUser.email && newUser.password) {
            alert('Registration - SuccesFul - Please Login!');
            this.props.register(newUser); //line 56 - you created  props method called register
        }   
        console.log('inside form submission of register user - redirecting to login page');
        localStorage.setItem('user', newUser);
        console.log(localStorage.getItem('user'));
        this.props.history.push('/login');
        console.log(this.props);

    }
    render(){
        return (
         <div>
            
            <h3>Register - Create a User Account  </h3>
            <form className='registerForm' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Name' id='name' onChange={this.handleChange} />    
                <input type='text' placeholder='Email' id='email' onChange={this.handleChange}/>
                <input type='password' placeholder='Password' id='password' onChange={this.handleChange}/>
                {/* <input type='password' placeholder='confirmPassword' id='confirmPassword' /> */}
                <button type='submit' id='registerButton' value='register'>Register</button>
            </form>
            {/* <Link to='/login'> LoginPage </Link> */}
       </div>
    )
}
}
// create a copy of the props make them accessible for this component
const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    user: state.users.users
  })

  // Adds a prop called "changeLoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "register"
  const mapDispatchToProps = (dispatch) => ({
    register : newUser => dispatch(register(newUser))
  })
  
 // export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);


