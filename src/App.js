import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <div className='background'></div>
      </div>
    );
  }
}

export default App;
