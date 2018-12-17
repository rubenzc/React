import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';

class App extends Component {

  state = {
    error: '',
    request: {},
    result: {}
  }

  componentDidUpdate() {
    this.checkApi();
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
    const appId = '811c5da067093e5f7224e7f097c52ae9';
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
        request: answer
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
