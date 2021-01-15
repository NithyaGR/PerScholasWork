import React, {useState} from 'react';
//import SetState from './SetState';
//import ReactDOM from 'react-dom';

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
    setRed(!isRed);
  };
  return (
    <div>
        <h3 className={isRed ? "red" : " "}> Change my color </h3>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
    </div>
  );
}

export default App;
