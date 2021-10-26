import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { todoReducer } from './store/reducers';
import { createStore } from 'redux';
import App from './App';


const store = createStore(todoReducer);
const app = (
  <Provider store={store}>
      <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
