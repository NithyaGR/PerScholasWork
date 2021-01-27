import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions/counterAction.js';

import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3> Hello </h3>
      <h3> Counter {counter}</h3>
      <button onClick= {() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
