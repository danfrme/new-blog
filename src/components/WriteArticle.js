import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  './styles/WriteArticle.css';


export class WriteArticle extends Component {

    handdleClear = () => {
        let text = document.querySelector('.text-writer');
        text.value = '';
    }
    
    render() {
        return (
            <main className="main-articles">
                <textarea className="text-writer" />
                <div className="buttons">
                <button className="add-article" onClick={this.props.handdleSubmit}>Click To Submit</button>
                <button className="add-article" onClick={this.handdleClear}>Clear All</button>
                <NavLink className="link" to="/articles" exact ><button className="add-article">Go Back To Articles</button></NavLink>
                </div>
            </main>
        )
    }
}

export default WriteArticle
