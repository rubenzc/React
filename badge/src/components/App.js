import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';
import '../css/App.css'

class App extends Component {
  
  state = {
    badge: '',
    difference: '',
    expenses: {}
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
          titulo = 'Weekly badge'
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
              gastos = {this.state.expenses}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
