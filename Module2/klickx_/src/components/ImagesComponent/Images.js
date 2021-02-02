import React from 'react';
import './Images.css';
import Moon from '../../Pictures/Moon.jpg';
import Fall from '../../Pictures/Fall.jpg';
import Fire from '../..//Pictures/Fire.jpeg';
import matches from '../../Pictures/matches.png';
import sunset from '../../Pictures/sunset.jpg';
import nature1 from '../../Pictures/nature1.jpg';
import Journey from '../../Pictures/Journey.jpeg';
import cosmos from '../../Pictures/cosmos.jpeg';
import earth from '../../Pictures/earth.jpeg';
import Vrindavan from '../../Pictures/Vrindavan.jpg';
import Srirangam from '../../Pictures/Srirangam.jpg';
import GantakiRiver from '../../Pictures/GantakiRiver.jpg';
import pictures from '../../reducers/pictureData';



const Images = (props) => { //why props? learn this
    console.log('Rendering Images');
    console.log(props); // check here
    return (
           <div className='imageContainer'>
               <img src={this.props.name} /> {/* send the name of the image through props */}
               
           </div>
    )
}
export default Images;