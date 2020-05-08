import React, { Component } from 'react';
import Head from './components/Head';
import Home from './components/Home';
import About from './components/About'
import Articles from './components/Articles';
import WriteArticle from './components/WriteArticle'
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './components/styles/App.css';


export class App extends Component {

  state={
    userName: 'Douglas',

    articles: [
      'The <textarea> tag defines a multi-line text input control. A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier). The size of a text area can be specified by the cols and rows attributes, or even better; through CSS',

      'The <textarea> tag defines a multi-line text input control. A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier). The size of a text area can be specified by the cols and rows attributes, or even better; through CSS El texto en sí no tiene sentido, aunque no es completamente aleatorio, sino que deriva de un texto de Cicerón en lengua latina, a cuyas palabras se les han eliminado sílabas o letras. El significado del texto no tiene importancia, ya que solo es una demostración o prueba, pero se inspira en la obra de Cicerón De finibus bonorum et malorum (Sobre los límites del bien y del mal) que comienza con:',

      'The <textarea> tag defines a multi-line text input control. A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier). The size of a text area can be specified by the cols and rows attributes, or even better; through CSS El texto en sí no tiene sentido, aunque no es completamente aleatorio, sino que deriva de un texto de Cicerón en lengua latina, a cuyas palabras se les han eliminado sílabas o letras. El significado del texto no tiene importancia, ya que solo es una demostración o prueba, pero se inspira en la obra de Cicerón De finibus bonorum et malorum (Sobre los límites del bien y del mal) que comienza con:'
    ]
  }

  handdleSubmit = () => {
    const text = document.querySelector('.text-writer').value;
    const newText = [...this.state.articles];
    newText.push(text);
    this.setState({
      articles: newText
    })
  }

  render() {
  return (
    <Router>

      <Head />

      <Route path="/" exact={true} strict
       render={() => { return <Home userName={this.state.userName} />;}} 
       />
       
      <Route path="/about" exact={true} strict
       render={() => { return <About userName={this.state.userName} />;}} 
       />

      <Route path="/articles" exact={true} strict
       render={() => { return <Articles userName={this.state.userName} 
          articles = {this.state.articles}
       />;}} 
       />

      <Route path="/write-new-article" exact={true} strict
       render={() => { return <WriteArticle handdleSubmit={this.handdleSubmit} />;}} 
       />

    </Router>
  );
}
}

export default App;
