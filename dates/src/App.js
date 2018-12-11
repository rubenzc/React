import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Date from './components/Date';

class App extends Component {

  createDate = e => {
    console.log('test2');
  } 

  render() {
    return (
      <div className="container">
        <Header
          title = {'Veterinary patient administrator'}
        />
        <div className="row">
          <div className="col-md-6">
            <Date
              const createDate = {this.createDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
