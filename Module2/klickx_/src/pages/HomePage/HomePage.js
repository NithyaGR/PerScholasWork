
import React, { Component } from 'react';
import './HomePage.css';


class HomePage extends Component{

    render() {
        console.log('inside the home page');
        return(
                <div className='homePage'>                            
                    <div className='mainContent'>
                        <div className='images'>
                            <img src='../../Pictures/biology_02.jpg' alt='biology' style='width:150px' />
                        </div>
                    </div>
                </div>
        )
    }

}

export default HomePage;