import React, { Component} from 'react';
import { Link, Router,Switch, Route } from 'react-router-dom';
import styles from './LoginForm.css';
import HomePage from '../pages/HomePage/HomePage';
import { connect } from 'react-redux';
import users from '../reducers/users';
import pictures from '../reducers/pictureData';
import { login } from '../actions/LoginLogoutAction';

//import { ActionITem } from '../actions/YourActions';

//const LoginForm = (props) => (
  class LoginForm extends Component {
    //Can we have our state here? As we are going to have our redux store?
    state = {
        users: users,
        pictures: pictures,
        currentUser: ''
        // isLoggedIn: false
      }
  
  handleChange = (e) =>{
      //to bind the text which we entered and to store in that corresponding ids  
      this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit=(e) => {
      e.preventDefault();
      //write the code to verify the user credentials and once done it needs to redirect to home page.
      // How to redirect to home page? 
      //set the state isLoggedIn to true
     
      console.log('inside handle submit');
      console.log(document.getElementById('login').value);
      console.log(document.getElementById('password').value);
      console.log(this.props.users);
      console.log(this.props.users.length);
      //storing the data in the variables - to validate the credentials
      let userEmail = document.getElementById('login').value;
      let userPassword = document.getElementById('password').value;
      console.log(userEmail+" : userInput : "+ this.props.users[2].email);
      console.log(userPassword+" : userInput Password : "+this.props.users[2].password);

      //code to verify the login credentials
      outer: 
      for(let i=0; i<this.props.users.length; i++){
          if((this.props.users[i].email) === userEmail  && (this.props.users[i].password) === userPassword ){
              if(this.props.users[i].password === userPassword){
                  console.log(this.props.users[i].name);
                  console.log('loginSuccessful');
                  //dispatching the changeStatus to trigger the login action to trigger the reducer to change
                  //the status of the login 
                  this.props.changeLoginStatus(this.props.users[i]);
                  this.setState({currentUser : this.props.users[i]});
                  //this.setState({currentUser.isLoggedIn : true});
                  break outer;
              }
              else {
                alert ('Incorrect password');
              }
          }
          else {
            alert('Check Your Email - No such user');
          }
      }
      

  }

    render() {
      console.log(this.state.currentUser);
      return ( 
        
        <div className='loginForm'>
        <form onSubmit={this.handleSubmit}>
                 <input type='text' placeholder='Login_Id or Email' id='login' onChange={this.handleChange}/>
                  <input type='password' placeholder='Password' id='password' onChange={this.handleChange}/>
                  <button type='submit' id='loginButton' value='Login'>Login</button>             
        </form>
        <Link className='btn btn-default' to='/register'> Create New Account </Link>
        {/* If logged in true- render HomePage*/}
       
            {/* {this.props.isLoggedIn ? <HomePage /> : '' }
            {this.state.currentUser.name}
            {this.state.currentUser.email}
            {this.state.currentUser.isLoggedIn} */}
            <HomePage />
        
        </div>
  // );
      )
    }
  }
  // create a copy of the props make them accessible for this component
  const mapStateToProps = (state) => ({
    users: state.users.users
  })

  // trigger the action - > call the reducer -> reducer will change the state
  // Adds a prop called "changeLoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "login"
  const mapDispatchToProps = (dispatch) => ({
    changeLoginStatus : item => dispatch(login(item))
  })
  
  
 // export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
