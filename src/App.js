import React, { Component } from 'react';
import Header from './Components/Header';
import Results from './Components/Results';
import Footer from './Components/Footer';
import '../src/styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Header/>
        <Results/>
        <Footer/>
      </div>
    );
  }
}

export default App;
