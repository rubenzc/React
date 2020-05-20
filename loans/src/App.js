import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';

function App() {

    //Define state
    //quantity is the state value
    //saveQuantity is a function to update the state
    const [quantity, saveQuantity] = useState(0);
    const [term, saveTerm] = useState('');
    const [total,saveTotal ] = useState(0);
    const [loading, saveLoading] = useState(false);

    let component;

    if (loading) {
        component = <Spinner />
    } else if (total === 0){
        component = <Message />
    } else {
        component = <Result
                    term = {term}
                    quantity = {quantity}
                    total = {total}
                    />
    }

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
          total = {total}
          saveTotal = {saveTotal}
          saveLoading = {saveLoading}
        />
        <div className="messages">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
