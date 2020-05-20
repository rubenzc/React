import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

    //Define state
    //quantity is the state value
    //saveQuantity is a function to update the state
    const [quantity, saveQuantity] = useState(0);

    const [term, saveTerm] = useState('');

  return (
    <Fragment>
      <Header
        title = "Loan quote"
      />
      <div className="container">
        <Form
          quantity = {quantity}
          saveQuantity = {saveQuantity}
          term = {term}
          saveTerm = {saveTerm}
        />
      </div>
    </Fragment>
  );
}

export default App;
