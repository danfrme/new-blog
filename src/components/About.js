import React, { Component, Fragment } from 'react';
import './styles/About.css'

export class About extends Component {
    render() {
        return (
            <Fragment>
            <div className="about-content">
                <h1>THIS IS THE ABOUT PAGE</h1>
            </div>
            <div className="about-content about-text">
                <p>This is a React Project made by {this.props.userName}</p>
            </div>
            </Fragment>
        )
    }
}

export default About
