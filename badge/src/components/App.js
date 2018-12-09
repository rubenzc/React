import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';
import {validarPresupuesto} from '../helper';
import '../css/App.css'

class App extends Component {
  
  state = {
    badge: '',
    difference: '',
    expenses: {}
  }

  componentDidMount(){
    this.getBadge();
  }


  getBadge = () =>{
    let badge = prompt('What is your badge??');
    
    let result = validarPresupuesto(badge);

    if (result){
      this.setState({
        badge: badge,
        difference : badge
      })
    } else {
      this.getBadge();
    }
  } 



  //Add new expense to the state
  addExpense = expense => {
    //Take a copy from actual state
    const expenses = {...this.state.expenses};
    console.log(expenses);
    //Add to expense the actual state
    expenses[`expense${Date.now()}`] = expense;
    console.log(expenses);
    //Update the state
    this.setState({
      expenses
    })
  }

  render() {
    return (
      <div className="App container">
        <Header
          title = 'Weekly badge'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form
                addExpense = {this.addExpense}
              />
            </div>
            <div className="one-half column">
              <List
              expenses = {this.state.expenses}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
