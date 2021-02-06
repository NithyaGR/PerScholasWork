import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register }  from '../../actions/RegisterUserAction';
import './RegisterPage.css';

class RegisterPage extends Component {

    state = {  
        newUser: {
                name: '',
                email: '',
                password: ''
        }
    }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // this.setState({ submitted: true }); checking -2
        console.log(this.state);
        //const { newUser } = this.state; //this is as same as grabbing from name store into name id and etc
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }    
      
        if (newUser.name && newUser.email && newUser.password) {
            alert('Registration - Successful - Please Login!');
            this.props.registerNewUser(newUser); //line 56 - you created  props method called register
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
                <button type='submit' id='registerButton' value='register'>Register</button>
            </form>
       </div>
    )
}
}
  // Adds a props called "register" which is a function that takes in a payload of inputted newUser 
  // data then dispatches payload to the action creator: "register"
  const mapDispatchToProps = (dispatch) => ({
    registerNewUser : newUser => dispatch(register(newUser))
  })
  

//export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
export default connect(null,mapDispatchToProps)(RegisterPage);


