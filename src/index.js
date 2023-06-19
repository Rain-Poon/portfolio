import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test'
import ResponsiveAppBar from './navbar'
import Skills from './skills.tsx';
import TabInterface from './Tabs';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import About from './AboutMe';
import Switcher from './Switcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switcher />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
