import React from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';

const Header = (props) => { //why props? learn this
    // console.log('Rendering Header - Check the props and learn');
    // console.log(props); // check here
    return (
           <header className='mainHeader'>
               <h1> K L I C K X_</h1>
           </header> 
    )
}
export default withRouter(Header);
