
import React from 'react';

function SetState() {


  const sayHello = () => {
    console.log("Say Hello");
  };

    return(
      <div>
          <h1> Hello World!!! My first React !!! </h1>
          <button onClick={sayHello()}>ClickMe</button>
      </div>
    );

}
export default SetState;
