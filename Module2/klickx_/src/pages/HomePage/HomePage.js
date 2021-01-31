
import React, { Component } from 'react';
import './HomePage.css';


class HomePage extends Component{

    render() {
        console.log('inside the home page');
        return(
                <div className='homePage'>                            
                    <div className='mainContent'>
                        <div className='image1'>
                            <img src='../../Pictures/biology.jpg' alt='biology' />
                        </div>
                        <div className='image2'>
                            <img src='Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/Fall.jpg' alt='fall' />
                        </div>
                        <div className='image3'>
                            <img src='/Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/Fire.jpeg' alt='fire' />
                        </div>
                        <div className='image4'>
                            <img src='/Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/matches.png' alt='matches' />
                        </div>
                        <div className='image5'>
                            <img src='/Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/sunset.jpg' alt='sunset' />
                        </div>
                        <div className='image6'>
                            <img src='/Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/nature1.jpg' alt='nature' />
                        </div>
                        <div className='image7'>
                            <img src='/Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/Journey.jpeg' alt='journey' />
                        </div>
                        <div className='image8'>
                            <img src='/Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/cosmos.jpeg' alt='cosmos' />
                        </div>
                        <div className='image9'>
                            <img src='/Users/student/Desktop/PerScholasWorks/Module2/klickx_/src/Pictures/earth.jpeg' alt='earth' />
                        </div>
                    </div>
                </div>
        )
    }

}

export default HomePage;