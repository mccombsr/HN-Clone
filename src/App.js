import React, { Component } from 'react';
import Header from './Components/Header';
import Results from './Components/Results';
import '../src/styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Results/>
      </div>
    );
  }
}

export default App;
