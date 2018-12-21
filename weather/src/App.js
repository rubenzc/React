import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

class App extends Component {

  state = {
    error: '',
    request: {},
    result: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.request !== this.state.request) {
    this.checkApi();
    }
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  checkApi = () => {
    const {city, country} = this.state.request;

    if(!city || !country) return null;

    //Read url & add api key
    const appId = '5691cb67d4449d4a2bebe46f2d82c7e4';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;


    //query with fetch api
    fetch (url)
      .then(answer => {
        return answer.json();
      })
      .then( data => {
        this.setState({
          result: data
        })
      })
      .catch(error => {
        console.log(error);
      })
}

  dataSearch = answer =>{
    
    if(answer.city === '' || answer.country === ''){
      this.setState({
        error: true
      })
    } else {
      this.setState({
        request: answer,
        error: false
      })
    }
      
  }

  render() {

    const error = this.state.error,
          {cod} = this.state.result;

    let result;

    if(error){
      result = <Error message="The fields can't be empty"/>
    } else if (cod === "404") {
      result = <Error message="City not found"/>
    }
    
    else {
      result = <Weather result = {this.state.result} />
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
