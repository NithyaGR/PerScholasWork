import React, {useState} from 'react';
//import SetState from './SetState';
//import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.css';
import AuthenticationService from './AuthenticationService.js';
import HelloWorldService from './api/myfirstreact/HelloWorldService.js';
//import ReactPlayer from 'react-player/youtube';




function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [playMusic, setMusic] = useState(true);
  const [apiMessage, setApiMessage] = useState('');

  //very important - the following keys should match with pojo's private variable 
  // otherwise you will get 
  const user = {
    firstName : 'Vitthal',
    lastName : 'Ruk',
    email : 'ruk@gmail.com',
    userPassword : 'rkrk'
  }

  // const user = new FormData();
  // user.append('first_name', 'Shakthi');
  // user.append('last_name', 'Kumaravel');
  // user.append('email', 'shakthi@gmail.com');
  // user.append('password', 'sksk');

  const increment = () =>{
    setCount(count+1);
    setRed(!isRed);
    if(count===5){
      AuthenticationService.registerSuccessfulLogin(count);
      //HelloWorldService.executeHelloWorldPathVariableService("nithya")
      //HelloWorldService.executeHelloWorldBeanService()
      HelloWorldService.executeHelloWorldService()
      //HelloWorldService.executeHelloWorldServicePost(user)
      .then( response => handleApiMessage(response) )
      .catch( error => handleErrorApiMessage(error) )
    }
    if(count===6){
        setMusic(!playMusic);
    }
    if(count===10){
      AuthenticationService.logout();
    }
  };
  const handleApiMessage = (response) => {
    console.log(response);
    setApiMessage(response.data[0].verse)
  }

  const handleErrorApiMessage = (error) => {
    console.log(error.response);
    //setApiMessage(error.response.data.message)
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
        <div className='player'>
        {/* {playMusic ? <ReactPlayer url='https://www.youtube.com/watch?v=_TABCN2Yc44' /> : " "} */}
        </div>
        <pre> {apiMessage}</pre>
        <div>
          <table className='table'>
              <thead>
                <tr>
                  <th scope='col1'> No</th>
                  <th scope='col1'> Chapter Name </th>
                  {/* <th scope='col1'> </th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <th scope='row'>1</th> */}
                  <td>1. </td>
                  <td>Arjuna Vishadha Yoga</td>
                </tr>
              </tbody>


          </table>
       
          </div>
    </div>
  );
}

export default App;
