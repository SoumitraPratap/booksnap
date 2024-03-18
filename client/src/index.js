import React from 'react';
import ReactDOM from 'react-dom/client';
import {Toaster} from "react-hot-toast";  //for toast notification
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strictmode helps in finding potential problems in code 
  <React.StrictMode>   
    <App />
    <Toaster/>
  </React.StrictMode>
);
