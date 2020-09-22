import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">MinBii</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <NavLink  to="/trang-chu" class="nav-NavLink js-scroll-trigger">Trang chủ</NavLink>     
                            </li>
                            <li class="nav-item">
                                <NavLink  to="/tin-tuc" class="nav-NavLink js-scroll-trigger">Tin Tức</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink  to="/lien-he" class="nav-NavLink js-scroll-trigger">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;