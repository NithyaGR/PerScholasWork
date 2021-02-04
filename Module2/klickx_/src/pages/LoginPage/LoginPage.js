import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import users from '../../reducers/users';
import pictures from '../../reducers/pictureData';
import { login } from '../../actions/LoginLogoutAction';
import history from '../../helpers/history';
import './LoginPage.css';


  class LoginPage extends Component {
    //Can we have our state here? As we are going to have our redux store?
    state = {
        users: users,
        pictures: pictures,
        currentUser: '',
        name: '',
        email: '',
        password:'',
        isLoggedIn: false
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
      console.log(this.props.users.newUser);
      const curUser = this.props.users.newUser;
      console.log(curUser);
      console.log(curUser.email);
      const { thisUser } = this.state; //this is as same as grabbing from name store into name id and etc
    //   const currentUser = {
    //     email: this.state.email,
    //     password: this.state.password
    // }   
      let userEmail = document.getElementById('email').value;
      let userPassword = document.getElementById('password').value;
      //code to verify the login credentials
      if(curUser.email === userEmail && curUser.password === userPassword){
        console.log('Login successful');
        alert("Login Successful");
        // this.setState({currentUser : curUser});
        // this.setState({isLoggedIn : true});
        //to change the state globally
        this.props.changeLoginStatus(curUser.name);
        this.props.history.push('/userHome');
      }
      else {
        alert('Invalid Credentials');
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
                  <button type='submit' id='loginButton' value='Login'>Login</button>             
        </form>
        <Link className='btn btn-default' to='/register'> Create New Account </Link>
        </div>
  
      )
    }
  }
  // create a copy of the props make them accessible for this component
  const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    users: state.users.users,
    currentUser: state.users.currentUser
  })

  // Adds a prop called "changeLoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "login"
  const mapDispatchToProps = (dispatch) => ({
    changeLoginStatus : data => dispatch(login(data))
  })
  
  
 // export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
