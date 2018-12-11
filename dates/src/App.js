import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title = {'Veterinary patient administrator'}
        />
      </div>
    );
  }
}

export default App;
