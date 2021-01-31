
import React from 'react';
import './Footer.css';
import { withRouter } from 'react-router-dom';

const Footer = (props) => { //why props? learn this
    console.log('Rendering Footer');
    console.log(props); // check here
    return (
           <header className='mainFooter'>
               <h3> K L I C K X_   ----- Thank you for visiting us! </h3>
           </header> 
    )
}
export default withRouter(Footer);