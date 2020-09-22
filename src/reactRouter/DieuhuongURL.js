import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Home from '../components/Home.js';
import Details from '../components/Details.js'
import News from '../components/News.js'
import Contact from '../components/Contact.js';


class DieuhuongURL extends Component {
    render() {
        return (
                    <div>
                        <Route exact path="/trang-chu" component={Home}/>
                        <Route exact path="/tin-tuc" component={News}/>
                        <Route exact path="/tin-chi-tiet" component={Details}/>
                        <Route exact path="/lien-he" component={Contact}/>
                    </div>
        );
    }
}

export default DieuhuongURL;