import React from 'react';
import './Summary.css';

const Summary = (props) =>  {
    return(
        <div className='summaryContainer'>
            <h3> Book Summary </h3>
            <p>{props.summary}</p>
        </div>
    );
}

 export default Summary;
