import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css'

class ProfilePage extends Component {
    
    render(){
    return (
       
            <div className='ProfilePage'>
                <div className='profile'>
                    <p> Display the profile details here</p>
                </div>
                <div className='image1'>
                    <img src=''></img>
                    <div className='image1Data'>
                        <h4>Display the likes and comments here</h4>
                    </div>
                </div>
                <div className='image2'>
                    <img src=''></img>
                    <div className='image2Data'>
                        <h4>Display the likes and comments here</h4>
                    </div>
                </div>
                
            </div>
        
    )
}
}
export default ProfilePage;