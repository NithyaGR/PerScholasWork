
import React, { Component } from 'react';
import './HomePage.css';
import Moon from '../../Pictures/Moon.jpg';
import Fall from '../../Pictures/Fall.jpg';
import Fire from '../..//Pictures/Fire.jpeg';
import matches from '../../Pictures/matches.png';
import sunset from '../../Pictures/sunset.jpg';
import nature1 from '../../Pictures/nature1.jpg';
import Journey from '../../Pictures/Journey.jpeg';
import cosmos from '../../Pictures/cosmos.jpeg';
import earth from '../../Pictures/earth.jpeg';



class HomePage extends Component{

    render() {
        console.log('inside the home page');
        return(
                <div className='homePage'>                            
                    <div className='mainContent'>
                        <div className='image1'>   
                            <img src={Fall} alt='fall' />        
                        </div>
                        <div className='image2'>
                            <img src={nature1} alt='nature' />
                        </div>
                        <div className='image3'>
                            <img src={Journey} alt='journey' />
                        </div>
                        <div className='image4'>
                             <img src={Fire} alt='fire' />       
                        </div>
                        <div className='image5'>
                            <img src={matches} alt='matches' />
                        </div>
                        <div className='image6'>
                            <img src={Moon} alt='moon' />  
                        </div>
                        <div className='image7'>
                            <img src={sunset} alt='sunset' />
                        </div>
                        <div className='image8'>
                            <img src={cosmos} alt='cosmos' />
                        </div>
                        <div className='image9'>
                            <img src={earth} alt='earth' />
                        </div>
                    </div>
                </div>
        )
    }

}

export default HomePage;