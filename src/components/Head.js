import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './styles/Head.css';

export class Head extends Component {
    render() {
        return (
            <header>
                <img src="logo192.png" alt="loquesea" />
                <h2>My blog</h2>
                <ul className="nav-bar">
                    <NavLink className="link" to="/" exact ><li>Home</li></NavLink>
                    <NavLink className="link" to="/about" exact ><li>About</li></NavLink>
                    <NavLink className="link" to="/articles" exact ><li>Articles</li></NavLink>
                </ul>
            </header>
        )
    }
}

export default Head