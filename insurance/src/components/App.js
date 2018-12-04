import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import {getYearDifference, checkBrand, getPlan} from '../helper';

class App extends Component {

  quoteInsurance = (data) =>{
    //Read the refs from the form
    const {brand, year, plan} = data;
    
    //Add a 2000$ base
    let result = 2000;

    //Get the difference between years
    const difference = getYearDifference(year);

    // Rest 3% insurance value per year
    result -= ((difference * 3) * result) / 100;

    //American: 15% , European: 30%, Asian: 5%
    result = checkBrand(brand) * result;

    //Basic plan increase the value 20% and full plan 50%
    result = parseFloat (getPlan(plan) * result).toFixed(2);

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
