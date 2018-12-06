import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import '../css/App.css'


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header
          titulo = 'Weekly badge'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form/>
            </div>
            <div className="one-half column">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
