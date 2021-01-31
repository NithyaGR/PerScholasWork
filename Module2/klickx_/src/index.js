import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers';
import history from './helpers/history';

const store = createStore(rootReducer);



ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
