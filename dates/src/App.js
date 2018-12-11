import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Date from './components/AddDate';
import DatesList from './components/DatesList';

class App extends Component {

  state = {
    dates: []
  }

  createDate = (newDate) => {
    //Copy of dates array from state
    const dates = [...this.state.dates, newDate]

    console.log(dates);

    this.setState({
      dates: dates
    })
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
          <div className="col-md-6">
            <DatesList
              dates={this.state.dates}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
