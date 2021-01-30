import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
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
        {/* <div className='innerContainer'>*/}
      <header> <h1> K L I C K X_ </h1>
      </header>
       
          
          <Router>
              <Switch>
                  <Route exact path='/login' render ={ (props) =>
                            <LoginForm />}>
                    
                    </Route>
                    <Route>
                            <Route path='/register' component={RegisterPage} />
                     </Route>
                      {/* If logged in true- render HomePage
                        {this.state.isLoggedIn ? <HomePage /> : '' }*/}
                </Switch>    
            
          </Router>
         
      
          </div>                
    //   </div>

  );
}
}

export default App;
