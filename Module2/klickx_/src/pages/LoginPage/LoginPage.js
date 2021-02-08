import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/LoginLogoutAction';
import './LoginPage.css';


  class LoginPage extends Component {
    //Can we have our state here? As we are going to have our redux store?
    //check no:1  we can use the state whichever we need to map for the current component or page
    state = {
      email: '',
      password:''
    }
  
  handleChange = (e) =>{
      //to bind the text which we entered and to store in that corresponding ids  
      this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit=(e) => {
      e.preventDefault();
      console.log('inside handle submit');
      
      // try{
      //   console.log(this.props.newUser);      
      // }
      // catch(exception){
      //   alert('No such user! Please create new account!');
      //   console.log(exception);
      //   this.props.history.push('/register');
      // }
      
      console.log(this.props.newUser);  
      const curUser = this.props.newUser;
      
      console.log(curUser);
      console.log(curUser.email);
      //const { thisUser } = this.state; this is as same as grabbing from name store into name id and etc
    //   const currentUser = {
    //     email: this.state.email,
    //     password: this.state.password
    // }   
      let userEmail = document.getElementById('email').value;
      let userPassword = document.getElementById('password').value;
      //code to verify the login credentials
      if(curUser.email === userEmail && curUser.password === userPassword){
        console.log('Login successful');
        this.props.loginUser(curUser);

        console.log(this.props);
        alert("Login Successful");
        this.props.history.push('/userHome');
        
      }
      else {
        alert('No such user matching your credentials! Tips: Register first! ');
     }
      // outer: 
      // for(let i=0; i<this.props.users.length; i++){
      //     if((this.props.users[i].email) === thisUser.email  && (this.props.users[i].password) === thisUser.password ){
              
      //             console.log(this.props.users[i].name);
      //             console.log('loginSuccessful');
      //             //dispatching the changeStatus to trigger the login action to trigger the reducer to change
      //             //the status of the login 
      //             this.props.changeLoginStatus(this.props.users[i]);
      //             this.setState({currentUser : this.props.users[i]});
      //             this.setState({
      //                           name: this.props.users[i].name,
      //                           email: this.props.users[i].email,
      //                           isLoggedIn: true
      //             })
      //             const {name, isLoggedIn} = this.state;
      //             localStorage.setItem('name', name);
      //             localStorage.setItem('isLoggedIn', isLoggedIn ? this.state.currentUser : '');
      //             console.log(localStorage.getItem('user'));
      //             history.push('/userHome');
      //             //this.setState({currentUser.isLoggedIn : true});
      //             break outer;
      //     } 
      
     
  }

    render() {
      console.log('inside login page');
      //console.log(this.state.currentUser); state is for global data - not for this class specific one
      console.log(this.props.users); //actually, props for the current class's variables and methods
      console.log(this.state);
      return ( 
        
        <div className='loginForm'>
        <form onSubmit={this.handleSubmit}>
                 <input type='text' placeholder='Login_Id or Email' id='email' onChange={this.handleChange}/>
                  <input type='password' placeholder='Password' id='password' onChange={this.handleChange}/>
                  <br /><br />
                  <button type='submit' id='loginButton' value='Login'>Login</button>             
        </form>
        <div className='link'>
          <br />
        <Link className='linkText' to='/register'> Create New Account </Link>
        </div>
        </div>
  
      )
    }
  }
  // create a copy of the props make them accessible for this component
  const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    newUser: state.users1.newUser
   
  })

  // Adds a prop called "loginUser" which is a function that takes in a payload
  // then dispatches payload to the action creator: "login"
  const mapDispatchToProps = (dispatch) => ({
    loginUser : data => dispatch(login(data))
  })
  
  
 // export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);