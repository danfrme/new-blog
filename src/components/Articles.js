import React, { Component } from 'react';
import './styles/Articles.css';
import { NavLink } from 'react-router-dom';

export class Articles extends Component {

    render() {
        return (
            <main className="main-articles">
                <NavLink to="/write-new-article" exact><button className="add-article">Click To Add An Article</button></NavLink>
                <p className="article">{this.props.articles[0]}</p>
                <p className="article">{this.props.articles[1]}</p>
                <p className="article">{this.props.articles[2]}</p>
            </main>
        )
    }
}

export default Articles
