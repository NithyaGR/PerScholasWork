
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';


class HomePage extends Component{

    render() {

        return(
            <Router>
                <Switch>
                    <Route exact path='/home' render ={ (props) =>
                            <HomePage />}>
                    <div className='HomePage'>
                        <h3> HomePage - Code will be here </h3>
                    <div id="sidebar1" class="sidebar">
                    <div class="sidebar__content">
                        <span>All Your side bar contents </span>
                    </div>
                </div>
            </div>
                    </Route>
                </Switch>
            </Router>
            
        )
    }

}

export default HomePage;