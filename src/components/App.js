import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './../css/App.css';
import Nav from './Nav.js'
import Home from './Home.js'
import Footer from './Footer.js'
import News from './News';
import Details from './Details';
import Contact from './Contact.js';
import DieuhuongURL from '../reactRouter/DieuhuongURL';
import home from "./Home.js";



function App() {
  return (
      <Router>
          <div className="App">
              <Nav/>
              <DieuhuongURL/>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
