import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';

class App extends Component {

  state = {
    error: ''
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  dataSearch = answer =>{
    
    if(answer.city === '' || answer.country === ''){
      this.setState({
        error: true
      })
    }
  }

  render() {

    const error = this.state.error;

    let result;

    if(error){
      result = <Error message="The fields can't be empty"/>
    }

    return (
      <div className="app">
        <Header
          title = 'React weather'
        />
        <Form
          dataSearch = {this.dataSearch}
        />
        {result}
      </div>
    );
  }
}

export default App;
