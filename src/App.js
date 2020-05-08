import React, { Component } from 'react';
import Head from './components/Head';
import Home from './components/Home';
import About from './components/About'
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './components/styles/App.css';


export class App extends Component {

  state={
    userName: 'Douglas'
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

    </Router>
  );
}
}

export default App;
