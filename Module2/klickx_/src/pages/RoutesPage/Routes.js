
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import SettingsPage from '../SettingsPage/Settings';
import UserHomePage from '../UserHomePage/UserHomePage';

export default class Routes extends Component {
    render() {
        return (
            
              <Switch>
                        <Route path='/' exact component={HomePage} /> {/* this will set the default page*/}

                        <Route path='/home' exact component={HomePage} />
                
                        <Route path='/login' component={LoginPage} />

                        <Route path='/register' component={RegisterPage} />

                        <Route path='/userHome' component={UserHomePage} />

                        <Route path='/profile' component={ProfilePage} />

                        <Route path='/favorites' component={FavoritesPage} />

                        <Route path='/settings' component={SettingsPage} />
                        
               </Switch>           
          
        )
    }
}
// we can add <Route path='/userHome:/name' component={UserHomePage} /> and the userHomePage
//can use this.props.match.params.name in the welcome message.
