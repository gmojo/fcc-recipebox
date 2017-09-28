import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import NavComponent from './Components/Navbar.js';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<NavComponent />, document.querySelector('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
