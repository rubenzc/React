import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';

class App extends Component {

  quoteInsurance = (data) =>{
    //Read the refs from the form
    console.log(data);
  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo = 'Car insurance quote'
        />
        <div className="contenedor-formulario">
          <Form
            quoteInsurance = {this.quoteInsurance}
          />
        </div>
      </div>
    );
  }
}

export default App;
