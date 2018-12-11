import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Date from './components/Date';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          title = {'Veterinary patient administrator'}
        />
        <div className="row">
          <div className="col-md-6">
            <Date/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
