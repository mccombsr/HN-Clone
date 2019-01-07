import React, { Component } from 'react';
import Header from './Components/Header';
import '../src/styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
