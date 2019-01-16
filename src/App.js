import React, { Component } from 'react';
import Header from './Components/Header';
import routes from './routes';
import Footer from './Components/Footer';
import '../src/styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Header/>
        {routes}
        <Footer/>
      </div>
    );
  }
}

export default App;
