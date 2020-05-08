import React, { Component } from 'react';
import  './styles/WriteArticle.css';


export class WriteArticle extends Component {

   
    
    render() {
        return (
            <main className="main-articles">
                <textarea className="text-writer" />
                <button className="add-article" onClick={this.props.handdleSubmit}>Click To Submit</button>
            </main>
        )
    }
}

export default WriteArticle
