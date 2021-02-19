import React, {useState} from 'react';
//import SetState from './SetState';
//import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.css';
import AuthenticationService from './AuthenticationService.js';
import HelloWorldService from './api/myfirstreact/HelloWorldService.js';



function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [apiMessage, setApiMessage] = useState('');

  const increment = () =>{
    setCount(count+1);
    setRed(!isRed);
    if(count===5){
      AuthenticationService.registerSuccessfulLogin(count);
      HelloWorldService.executeHelloWorldPathVariableService("nithya")
      //HelloWorldService.executeHelloWorldBeanService()
      // HelloWorldService.executeHelloWorldService()
      .then( response => handleApiMessage(response) )
      .catch( error => handleErrorApiMessage(error) )
    }
    if(count===10){
      AuthenticationService.logout();
    }
  };
  const handleApiMessage = (response) => {
    setApiMessage(response.data.message)
  }

  const handleErrorApiMessage = (error) => {
    console.log(error.response);
    setApiMessage(error.response.data.message)
  }
  return (
    <div>
        <header className="navbar navbar-expand-lg navbar-light bg-primary">
          <ul className="nav nav-pills ">
            <li className="nav-item">Home</li>
            <li className="nav-item">ThisApp</li>

          </ul>
        </header>
        <h3 className={isRed ? "red" : " "}> Change my color </h3>
        <button className='btn btn-dark' onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <h1> {apiMessage}</h1>
    </div>
  );
}

export default App;
