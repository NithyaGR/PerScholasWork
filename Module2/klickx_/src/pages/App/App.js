import React, { Component } from 'react';
//import LoginForm from '../../components/LoginForm';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import './App.css';

class App extends Component {
    state = {
        //Can we have our state here? As we are going to have our redux store? 
       isLoggedIn : false
    }
    // onClickHandle=() =>{
    //     this.setState({showRegister : true});
    //     console.log('onClickHandle');
    //     return  <Redirect  to="/register" />
    // }
    
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        //write the code to verify the user credentials and once done it needs to redirect to home page.
        // How to redirect to home page? 
        //set the state isLoggedIn to true
        this.setState({
            isLoggedIn : true
        });
        console.log('inside handle submit');

    }
    
  render() {
   
  return (
     <div className='appContainer'>
        <div className='innerContainer'>
      <header> K L I C K X_
      </header>
      
          
          <Router>
              <Switch>
                  <Route exact path='/login'>
                       <div className='loginForm'>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' placeholder='Login_Id or Email' id='login' onChange={this.handleChange}/>
                            <input type='password' placeholder='Password' id='password' onChange={this.handleChange}/>
                            <button type='submit' id='loginButton' value='Login' >Login</button>
                        </form>
                        </div>
                        <Link className='btn btn-default' to='/register'> Create New Account </Link>
                    </Route>
                </Switch>    
                 {/* <Link to="/register" className="btn btn-primary">Sign up</Link> */}
                 
                 {/* <Link className='btn btn-default' to='/register'> Create New Account </Link> */}
                     {/* <Link to='/register'> 
                            <button onClick={this.onClickHandle}>Sign-Up</button>
                            {/* {this.state.showRegister ? <RegisterPage /> : ''} //'/register'
                      </Link> */}
                      <Switch>
                      <Route>
                      <Route path='/register' render ={ (props) =>
                                    <RegisterPage {...props}/>
                        } />
                     </Route>
                     </Switch>
             
          </Router>
          {/* If logged in true- render HomePage*/}
          {this.state.isLoggedIn ? <HomePage /> : '' }
      
          </div>                
      </div>

  );
}
}

export default App;
