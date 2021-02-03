
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
//import SettingsPage from './pages/SettingsPage';
import UserHomePage from './pages/UserHomePage/UserHomePage';

export default class Routes extends Component {
    render() {
        return (
            
              <Switch>
                        <Route path='/home' exact component={HomePage} />
                
                        <Route path='/login' component={LoginPage} />

                        <Route path='/register' component={RegisterPage} />

                        <Route path='/userHome' component={UserHomePage} />

                        <Route path='/profile' component={ProfilePage} />

                        <Route path='/favorites' component={FavoritesPage} />

                        {/* <Route path='/settings' component={SettingsPage} /> */}
                     
                        {/*<Route path='/home' component={HomePage} />*/}
                        
               </Switch>           
          
        )
    }
}