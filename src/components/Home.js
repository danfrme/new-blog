import React, { Component } from 'react';
import './styles/Home.css'

export class Home extends Component {
 
    render() {
        return (
            <div className="home-content">
                <h1>WELCOME {this.props.userName.toUpperCase()}</h1>
            </div>
        )
    }
}

export default Home
