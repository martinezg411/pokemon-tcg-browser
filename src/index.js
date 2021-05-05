import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserState from './context/user/UserState';

ReactDOM.render(
  <UserState>
    <App />
  </UserState>,
  document.getElementById('root'),
);
