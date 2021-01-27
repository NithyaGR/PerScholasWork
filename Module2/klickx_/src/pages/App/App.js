import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
  return (
     <div>
      <header> K L I C K X_
      </header>
      <div className='loginForm'>
          <form>
              <input type='text' placeHolder='Login_Id or Email' id='login' />
              <input type='password' placeHolder='Password' id='password' />
              <button type='submit' value='Login'>Login</button>
          </form>
      </div>
      </div>

  );
}
}

export default App;
