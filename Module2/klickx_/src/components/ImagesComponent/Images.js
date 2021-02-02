import React from 'react';
import './Images.css';

import pictures from '../../reducers/pictureData';



const Images = (props) => { //why props? learn this
    console.log('Rendering Images');
  
    
    return (
           <div className='imageContainer'>
               { pictures.map(({id, name, source}) => <img key={id} src={source} alt={name} />)}
               
           </div>
    )
}
export default Images;