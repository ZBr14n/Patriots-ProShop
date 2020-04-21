import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './components/Navigation.js'
import ContactUs from './components/ContactUs.js'
import Departments from './components/Departments.js'
import Footer from './components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/cerulean/bootstrap.min.css"; 

ReactDOM.render(
  <React.StrictMode>

    <Navigation />

    <Departments />
    <App />
    <ContactUs />
    
    <Footer />
    
  </React.StrictMode>,
  document.getElementById('root')
);

