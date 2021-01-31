import React, { Component } from 'react';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
//import { Link,useHistory, Redirect } from 'react-router-dom';
//import { history } from '../../helpers/history';
import HomePage from '../../pages/HomePage/HomePage';
import users from '../../reducers/users';
import pictures from '../../reducers/pictureData';
import './App.css';

class App extends Component {
    
        //Can we have our state here? As we are going to have our redux store? Yes, this is the global state's
        //copy
        state = {
            users: users,
            pictures: pictures
            // isLoggedIn: false
          }
    
    // handleChange = (e) =>{
    //     //to bind the text which we entered and to store in that corresponding ids  
    //     this.setState({ [e.target.id]: e.target.value })
    // }
    // handleSubmit=(e) => {
    //     e.preventDefault();
    //     //write the code to verify the user credentials and once done it needs to redirect to home page.
    //     // How to redirect to home page? 
    //     //set the state isLoggedIn to true
    //     this.setState({
    //         isLoggedIn : true
    //     });
    //     console.log('inside handle submit');
    // }
    
  render() {
   console.log("Inside the app");
   console.log(this.state.users);
  return (
     <div className='appContainer'>
        {/* <div className='innerContainer'>*/}
      <header className='mainHeader'> 
          <h1> K L I C K X_ </h1>
      </header>
          <Router>
              <Switch>
                    {/* <Route>
                            <Route path='/home' component={HomePage} />
                     </Route> */}
                     <Route>
                            <Route exact path='/login' component={LoginPage} />
                    </Route>
                    <Route>
                            <Route path='/register' component={RegisterPage} />
                     </Route>
                     <Route>
                            <Route path='/home' component={HomePage} />
                     </Route>
                        
               </Switch>    
            
          </Router>
         
      
          </div>                
    //   </div>

  );
}
}

export default App;
